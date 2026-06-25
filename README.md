# KaiZenly+ — Marketing Website

**🌐 Live site: https://nadeem12q.github.io/kaizenly/**

A privacy-first, AI-agent-friendly marketing website for the **KaiZenly+** Android app.
Built with **Astro** (static HTML output) and a hand-crafted monochrome CSS design system
that mirrors the app's `DESIGN.md` (EB Garamond serif display + Inter, dark anchor + light
theme, pill buttons, flat hairline cards).

> All page content is plain, crawlable HTML — no client-side framework renders the text, so
> Google, ChatGPT, Claude, Gemini and other agents can read every page without running JS.

---

## Quick start

```bash
npm install        # already run once
npm run dev        # dev server  -> http://localhost:4321/kaizenly/
npm run build      # static build -> ./dist
npm run preview    # serve the build -> http://localhost:4321/kaizenly/
```

> Note the trailing **/kaizenly/** path — the site is configured for GitHub Pages, so the
> homepage lives at `/kaizenly/`, not `/`.

### Regenerate screenshots / assets (only if raw library changes)

```bash
node scripts/process-screenshots.mjs   # copies + privacy-masks screenshots into public/screenshots
node scripts/build-assets.mjs          # generates og-image.png + PNG icons
node scripts/check-links.mjs           # verifies no broken internal links (run after build)
```

---

## Changing the domain (one place)

Everything (canonical URLs, sitemap, llms.txt, app-data.json, JSON-LD, OpenGraph) is derived
from a single config. Edit **`src/config.mjs`**:

```js
// GitHub Pages (current)
origin: 'https://nadeem12q.github.io',
base: '/kaizenly-plus',

// Custom domain (future) — switch to:
// origin: 'https://kaizenly.app',
// base: '',
```

Then update `astro.config.mjs` is **not** needed — it imports the same config. Just rebuild.

---

## Project structure

```
WEB FOR KAIZENLY+/
├─ src/
│  ├─ config.mjs            # origin + base path (single source of truth)
│  ├─ data/
│  │  ├─ app.mjs            # all verified app facts, features, permissions, FAQ
│  │  └─ screenshots.mjs    # categorized screenshot library + alt text
│  ├─ layouts/Base.astro    # <head>, SEO meta, OG/Twitter, JSON-LD, theme, header/footer
│  ├─ components/           # Header, Footer, Phone, Shot
│  ├─ pages/                # all routes + machine-readable endpoints
│  └─ styles/global.css     # the monochrome design system
├─ public/
│  ├─ screenshots/          # optimized WebP screenshots used by the site (54 files)
│  ├─ downloads/            # << put the signed APK here (see below)
│  ├─ favicon.svg           # KaiZenly+ sprout-K mark
│  └─ og-image.png, icon-*.png
├─ scripts/                 # screenshot masking, asset gen, link checking
├─ _raw_screens/            # raw screenshot masters (NOT published, gitignored)
└─ dist/                    # build output
```

## Routes

Pages: `/`, `/features/`, `/zen-shield/`, `/habits/`, `/journal/`, `/insights/`, `/backup/`,
`/privacy/`, `/permissions/`, `/screenshots/`, `/why-kaizenly/`, `/use-cases/students/`,
`/use-cases/professionals/`, `/about/`, `/faq/`, `/download/`, plus a `404` page.

Machine-readable endpoints: `/llms.txt`, `/llms-full.txt`, `/app-data.json`, `/robots.txt`,
`/sitemap.xml` (all base-path aware).

---

## Distribution ("Coming soon" → Google Play)

The app is **not distributed directly** (no APK download / no side-loading). Every call-to-action
renders through `src/components/DownloadCta.astro`, driven by a single config in
`src/data/app.mjs`:

```js
export const download = {
  live: false,                 // flip to true when the Play Store listing is published
  playStoreUrl: '',            // e.g. 'https://play.google.com/store/apps/details?id=app.kaizenly'
  comingSoonLabel: 'Coming soon',
  liveLabel: 'Get it on Google Play',
};
```

While `live` is `false`, every CTA shows a non-clickable **"Coming soon"** button. When the
listing goes live, set `live: true` and fill in `playStoreUrl` — all buttons across the site
turn into **"Get it on Google Play"** links automatically. No per-page edits needed.

---

## Deploy to GitHub Pages

The site is configured for `https://nadeem12q.github.io/kaizenly/` (a **project page** of
the `kaizenly-plus` repo). Recommended: keep the website in a `web/` subfolder of that repo.

1. Copy this whole folder into the repo as `web/` (so `kaizenly-plus/web/package.json` exists).
2. Copy `deploy/deploy-website.yml` to `kaizenly-plus/.github/workflows/deploy-website.yml`.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push to `main`. The workflow builds `web/` and deploys `web/dist` to Pages.

For a custom domain later (`kaizenly.app`), set `origin`/`base` in `src/config.mjs` as shown
above and add a `CNAME` file in `public/`.

---

## Honesty / content rules baked in

- No fake reviews, ratings, download counts, or Play Store badge (no public listing yet).
- Not described as "open source" (repo is private). Security is framed positively by what it has,
  not by what it lacks — avoid volunteering "not end-to-end encrypted" style disclaimers.
- App is closed source: state only that data/database/backups are "encrypted" — do not name
  specific algorithms (no SQLCipher / AES-256-GCM / PBKDF2) anywhere public, including llms.txt
  and app-data.json.
- Future AI / backend / MCP features are presented only as possibilities, never current features.
- Backup screenshots with a visible Google account email are masked (46, 47); one was excluded (48).
