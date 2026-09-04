import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const ORIGIN = 'https://jamacita.org';
const EXCLUDED_DIRS = new Set(['.git', '.github', 'node_modules', 'templates', 'scripts', 'security']);
const errors = [];

async function walk(dir = ROOT) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && EXCLUDED_DIRS.has(entry.name)) continue;
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute));
    else files.push(absolute);
  }
  return files;
}

function relative(file) {
  return path.relative(ROOT, file).split(path.sep).join('/');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function expectedUrl(rel) {
  if (rel === 'index.html') return `${ORIGIN}/`;
  if (rel.endsWith('/index.html')) return `${ORIGIN}/${rel.slice(0, -'index.html'.length)}`;
  return `${ORIGIN}/${rel}`;
}

function findTag(html, tagName, attrName, attrValue) {
  const re = new RegExp(`<${tagName}\\b[^>]*\\b${attrName}=["']${escapeRegExp(attrValue)}["'][^>]*>`, 'i');
  return html.match(re)?.[0] ?? null;
}

function getAttr(tag, attrName) {
  if (!tag) return null;
  const re = new RegExp(`\\b${attrName}=["']([^"']*)["']`, 'i');
  return tag.match(re)?.[1] ?? null;
}

function metaName(html, name) {
  return getAttr(findTag(html, 'meta', 'name', name), 'content');
}

function metaProperty(html, property) {
  return getAttr(findTag(html, 'meta', 'property', property), 'content');
}

function linkRel(html, rel) {
  return getAttr(findTag(html, 'link', 'rel', rel), 'href');
}

function titleOf(html) {
  return html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim() ?? null;
}

function isNoindex(html) {
  return (metaName(html, 'robots') ?? '').toLowerCase().includes('noindex');
}

function hrefs(html) {
  return [...html.matchAll(/\bhref=["']([^"']+)["']/gi)].map(m => m[1]);
}

function targetPathFromSitePath(sitePath) {
  const clean = sitePath.split(/[?#]/)[0];
  if (clean === '/' || clean === '') return path.join(ROOT, 'index.html');
  if (clean.endsWith('/')) return path.join(ROOT, clean.replace(/^\//, ''), 'index.html');
  return path.join(ROOT, clean.replace(/^\//, ''));
}

async function isFile(filePath) {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
}

async function existsTarget(href, sourceRel) {
  if (/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(href) || href.startsWith('#') || href.startsWith('//')) return true;
  const clean = href.split(/[?#]/)[0];
  if (!clean) return true;

  let target;
  if (clean.startsWith('/')) {
    target = targetPathFromSitePath(clean);
  } else {
    const sourceDir = path.dirname(path.join(ROOT, sourceRel));
    const resolved = path.resolve(sourceDir, clean);
    target = clean.endsWith('/') ? path.join(resolved, 'index.html') : resolved;
  }

  if (!target.startsWith(ROOT)) return false;
  return isFile(target);
}

const files = await walk();
const htmlFiles = files.filter(f => f.endsWith('.html'));
const sitemapPath = path.join(ROOT, 'sitemap.xml');
const sitemap = await readFile(sitemapPath, 'utf8');
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]));
const canonicalOwners = new Map();

for (const file of htmlFiles) {
  const rel = relative(file);
  const html = await readFile(file, 'utf8');
  const is404 = rel === '404.html';
  const noindex = isNoindex(html);
  const expected = expectedUrl(rel);
  const title = titleOf(html);
  const description = metaName(html, 'description');
  const canonical = linkRel(html, 'canonical');
  const ogTitle = metaProperty(html, 'og:title');
  const ogDescription = metaProperty(html, 'og:description');
  const ogType = metaProperty(html, 'og:type');
  const ogUrl = metaProperty(html, 'og:url');
  const twitterCard = metaName(html, 'twitter:card');

  const require = (condition, message) => {
    if (!condition) errors.push(`${rel}: ${message}`);
  };

  require(/<html\b[^>]*lang=["']en["']/i.test(html), 'missing lang="en"');
  require(/<meta\b[^>]*charset=["']utf-8["']/i.test(html), 'missing UTF-8 charset');
  require(Boolean(findTag(html, 'meta', 'name', 'viewport')), 'missing viewport meta');
  require(Boolean(title), 'missing <title>');
  require(Boolean(description), 'missing meta description');
  require(Boolean(findTag(html, 'meta', 'name', 'color-scheme')), 'missing color-scheme meta');
  require(linkRel(html, 'stylesheet') === '/assets/css/site.css', 'must use /assets/css/site.css');
  require(!/<style\b/i.test(html), 'inline <style> blocks are not allowed');
  require(/<main\b/i.test(html), 'missing semantic <main>');
  require(/<footer\b/i.test(html), 'missing <footer>');

  if (rel === 'index.html') require(title === 'Jamacita', 'homepage title must be exactly "Jamacita"');
  else require(title?.endsWith(' — Jamacita'), 'page title must end with " — Jamacita"');

  if (is404) {
    require(noindex, '404 page must be noindex');
  } else {
    require(Boolean(canonical), 'missing canonical URL');
    require(canonical === expected, `canonical must be ${expected}`);
    require(Boolean(ogTitle), 'missing og:title');
    require(Boolean(ogDescription), 'missing og:description');
    require(['website', 'article'].includes(ogType), 'og:type must be website or article');
    require(ogUrl === canonical, 'og:url must equal canonical URL');
    require(twitterCard === 'summary', 'twitter:card must be summary');
    require(ogTitle === title, 'og:title must equal <title>');

    if (canonical) {
      if (canonicalOwners.has(canonical)) errors.push(`${rel}: duplicate canonical also used by ${canonicalOwners.get(canonical)}`);
      else canonicalOwners.set(canonical, rel);
    }

    if (noindex) require(!sitemapUrls.has(expected), 'noindex page must not appear in sitemap.xml');
    else require(sitemapUrls.has(expected), 'indexable HTML page missing from sitemap.xml');
  }

  for (const href of hrefs(html)) {
    if (!(await existsTarget(href, rel))) errors.push(`${rel}: broken internal link ${href}`);
  }
}

for (const url of sitemapUrls) {
  if (!url.startsWith(`${ORIGIN}/`)) {
    errors.push(`sitemap.xml: non-canonical origin ${url}`);
    continue;
  }
  const pathname = new URL(url).pathname;
  if (!(await isFile(targetPathFromSitePath(pathname)))) errors.push(`sitemap.xml: target does not exist for ${url}`);
}

const robots = await readFile(path.join(ROOT, 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap: https://jamacita.org/sitemap.xml')) errors.push('robots.txt: sitemap declaration missing or incorrect');

if (errors.length) {
  console.error(`\nSite validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Site validation passed: ${htmlFiles.length} HTML files checked, ${sitemapUrls.size} sitemap URLs checked.`);
