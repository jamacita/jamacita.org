# Cloudflare hardening for jamacita.org

This document defines the recommended Cloudflare configuration for protecting jamacita.org while keeping ordinary search visibility available.

## 1. Objective

Keep the site publicly readable for normal visitors and general search indexing, while reducing automated extraction, AI training access, aggressive scraping and high-volume bot behaviour.

## 2. Recommended Cloudflare settings

### 2.1 Bots

Enable, where available for the active Cloudflare plan:

- Bot Fight Mode or Super Bot Fight Mode
- AI Crawl Control / AI Audit / AI crawler blocking
- Verified Bots handling so that legitimate search crawlers are not blocked accidentally

Recommended action logic:

- verified search crawlers: allow
- known AI-training crawlers: block
- unknown automated clients: managed challenge
- high-volume non-browser traffic: managed challenge or block

### 2.2 WAF custom rules

Create a WAF custom rule named:

`Block AI training and scraper user agents`

Suggested expression:

```text
(http.user_agent contains "GPTBot") or
(http.user_agent contains "ChatGPT-User") or
(http.user_agent contains "CCBot") or
(http.user_agent contains "Google-Extended") or
(http.user_agent contains "ClaudeBot") or
(http.user_agent contains "anthropic-ai") or
(http.user_agent contains "PerplexityBot") or
(http.user_agent contains "Applebot-Extended") or
(http.user_agent contains "Amazonbot") or
(http.user_agent contains "Bytespider") or
(http.user_agent contains "FacebookBot") or
(http.user_agent contains "meta-externalagent")
```

Action:

`Block`

### 2.3 WAF managed challenge for suspicious automation

Create a WAF custom rule named:

`Challenge suspicious automated access`

Suggested expression:

```text
(not cf.client.bot and http.request.uri.path ne "/robots.txt" and http.request.uri.path ne "/sitemap.xml" and http.request.uri.path ne "/tdmrep.json" and http.request.uri.path ne "/.well-known/tdmrep.json" and http.request.uri.path ne "/rights/tdm-policy.json" and http.user_agent eq "")
```

Action:

`Managed Challenge`

### 2.4 Rate limiting

If available, configure a rate limiting rule:

- scope: whole site
- threshold: conservative, for example more than 60 requests per minute per IP
- action: Managed Challenge first, Block only after repeated abuse

Do not set the threshold too low, because static assets and normal browsing can generate multiple requests.

### 2.5 Security Events monitoring

Review Cloudflare Security Events after activation:

- verify that Googlebot/Bingbot are not blocked
- inspect requests to `/rights/`, `/tdmrep.json`, `/.well-known/tdmrep.json` and `/sitemap.xml`
- identify repeated data-centre traffic and unknown automation
- tighten WAF rules only after observing actual traffic patterns

## 3. Important limitation

Cloudflare can reduce automated access, but it cannot fully prevent manual copying, screenshots, downstream quotation or unlawful scraping by actors that ignore technical and legal signals.

The public site should therefore remain a reduced surface. Detailed method, transfer logic, assessment matrices, client references and operational frameworks must remain outside public pages.
