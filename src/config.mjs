// ---------------------------------------------------------------------------
// Single source of truth for the site origin + base path.
//
// GitHub Pages (current):   origin = https://nadeem12q.github.io , base = /kaizenly
// Custom domain (future):   origin = https://kaizenly.app          , base = ''
//
// To move to the custom domain later, just change `origin` to
// 'https://kaizenly.app' and `base` to '' — every canonical URL, sitemap entry,
// OpenGraph tag, JSON-LD url and internal link updates automatically.
// ---------------------------------------------------------------------------

export const SITE = {
  origin: 'https://nadeem12q.github.io',
  base: '/kaizenly',

  name: 'KaiZenly+',
  alternateName: 'KaiZenly Plus',
  tagline: 'Improve your life calmly, one small step at a time.',
  shortDescription:
    'Privacy-first Android app for habits, focus, journaling, mood tracking, and daily routines. Local-first, no account, no tracking.',
  twitter: '', // no handle yet
  locale: 'en',
};

// Absolute URL builder (origin + base + path) for canonical / OG / sitemap / JSON-LD.
// absUrl('/')          -> https://nadeem12q.github.io/kaizenly/
// absUrl('/privacy/')  -> https://nadeem12q.github.io/kaizenly/privacy/
// absUrl('/llms.txt')  -> https://nadeem12q.github.io/kaizenly/llms.txt
export function absUrl(path = '/') {
  const base = `${SITE.origin}${SITE.base}`.replace(/\/$/, '');
  const p = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`;
  return `${base}${p}`;
}

// Base-prefixed path for internal links & public assets (no origin).
// withBase('/privacy/')        -> /kaizenly/privacy/
// withBase('screenshots/x.webp') -> /kaizenly/screenshots/x.webp
export function withBase(path = '/') {
  const base = SITE.base.replace(/\/$/, '');
  const p = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`;
  return `${base}${p}`;
}
