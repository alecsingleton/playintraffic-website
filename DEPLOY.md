# Deploying playintraffic.ca

The site is built with [Eleventy](https://www.11ty.dev/) and deployed to **GitHub Pages** automatically by `.github/workflows/deploy.yml` on every push to `main`.

```
push to main → GitHub Actions → npm ci → npm run build → deploy _site/ to Pages
```

Nothing manual is required. The custom domain (`CNAME`), `robots.txt`, and `.nojekyll` are copied into the build from `src/`.

## Local development

```bash
npm install
npm run serve     # dev server with live reload at localhost:8080
npm run build     # production build into _site/
```

Requires Node 18+.

## Project layout

```
src/                  Eleventy input — pages, layouts, data, assets
  _data/apps.js       Single source of truth for the three apps
                      (names, store links, FAQs, ratings, icons)
  _data/site.json     Site URL, email, Umami ID, theme color
  _data/strings.json  EN/FR/DE UI strings
  _includes/          Layouts (base, product, post, guide, legal) + partials
  fr/, de/            Localized homepage + product pages (hreflang wired)
  guides/             Evergreen SEO content
  blog/               Posts; index, feeds, What's-new sections are generated
assets-src/           Original full-resolution screenshots and icons
tools/                Image pipeline scripts (see below)
_site/                Build output (gitignored)
```

`sitemap.xml` and `feed.xml` (RSS) are generated automatically from the page collection — never edit them by hand. New blog posts only need a file in `src/blog/<app>/` with front matter; the blog index, RSS feed, sitemap, and each product page's "What's new" section update themselves.

## Images

Originals live in `assets-src/`. Optimized WebP/PNG derivatives are committed in `src/img/` and `src/screenshots/`. After adding or changing source images:

```bash
npm run images    # resize + WebP screenshots, favicon set (needs Python 3 + Pillow)
npm run cards     # regenerate 1200x630 social share cards
```

## App Store ratings

`src/_data/apps.js` holds each app's `rating`. The `aggregateRating` schema is only emitted once an app has ≥ 5 ratings, so thin data never looks gamed. Check current values with:

```bash
curl -s "https://itunes.apple.com/lookup?id=6755962631&country=ca"   # Random Run
curl -s "https://itunes.apple.com/lookup?id=6759763484&country=ca"   # BikeRight
curl -s "https://itunes.apple.com/lookup?id=6761119312&country=ca"   # Go for a Walk
```

## Analytics (Umami)

[Umami](https://umami.is) is loaded on every page via the base layout (cookieless, GDPR-friendly). The website ID lives in `src/_data/site.json`.

Tracked events (via `data-umami-event` attributes):

- `download-click` with `app` property — every App Store button (hero, final CTA, homepage cards, post/guide CTAs)
- `hub-card` with `app` property — homepage "Learn more" clicks

### Suggested funnels

**Homepage → product page → download**
1. URL: `/` → 2. Event: `hub-card` → 3. URL: `/random-run.html` → 4. Event: `download-click`

**Direct → download**
1. URL: `/random-run.html` → 2. Event: `download-click`

## Post-deploy checklist

- [ ] `https://playintraffic.ca` loads with HTTPS
- [ ] A product page shows the Smart App Banner on iOS Safari
- [ ] `https://playintraffic.ca/sitemap.xml` and `/feed.xml` are valid
- [ ] Link previews look right (paste a product URL into iMessage/Slack)
- [ ] `/fr/` and `/de/` pages render correctly
