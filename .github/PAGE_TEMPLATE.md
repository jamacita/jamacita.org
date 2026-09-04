# Jamacita page template

Use this implementation shell for new regular concept or system pages. Replace all bracketed placeholders and add the resulting page URL to `sitemap.xml` unless the page is intentionally `noindex`.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>[Page Title] — Jamacita</title>
  <meta name="description" content="[Concise page description]">
  <meta name="color-scheme" content="light dark">
  <link rel="canonical" href="https://jamacita.org/[path]/">
  <meta property="og:title" content="[Page Title] — Jamacita">
  <meta property="og:description" content="[Concise page description]">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://jamacita.org/[path]/">
  <meta name="twitter:card" content="summary">
  <link rel="stylesheet" href="/assets/css/site.css">
</head>
<body>
  <div class="wrap">
    <main class="card">
      <header class="page-header">
        <h1>[Page Title]</h1>
        <p class="lead">[Lead statement]</p>
        <p>[Introductory context]</p>
      </header>

      <section class="grid" aria-label="[Section label]">
        <article class="tile">
          <h2>[Principle]</h2>
          <p>[Explanation]</p>
        </article>
      </section>

      <footer>
        <span class="pill">[page-id]</span>
        <span class="links"><a href="/">Back to Jamacita</a></span>
      </footer>
    </main>
  </div>
</body>
</html>
```

## Baseline rules

- Use `/assets/css/site.css`; do not add page-local `<style>` blocks.
- Regular page titles follow `[Page Title] — Jamacita`; the homepage remains `Jamacita`.
- Canonical and `og:url` must match the public page URL exactly.
- `og:title` matches the HTML title.
- Regular pages use `og:type="website"`; genuine long-form articles may use `article`.
- Indexable HTML pages belong in `sitemap.xml`; intentionally `noindex` pages do not.
- Keep the semantic shell: `<main>`, `<header>`, content sections, `<footer>`.
- Run `npm run check` before publication.
