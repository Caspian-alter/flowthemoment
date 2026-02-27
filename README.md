# Flow the Moment / 流动此刻

Bilingual Astro website for `flowthemoment.com` (Chinese default + English).

## Tech Stack

- [Astro](https://astro.build/)
- Astro Content Collections (Markdown/MDX-ready)
- Static output, optimized for GitHub Pages

## Routes

- `/` (中文首页)
- `/en` (English home)
- `/apps` and `/en/apps`
- `/apps/sunny-breath` and `/en/apps/sunny-breath`
- `/apps/sunny-breath/privacy` and `/en/apps/sunny-breath/privacy`
- `/apps/sunny-breath/terms` and `/en/apps/sunny-breath/terms`
- `/about` and `/en/about`
- `/blog` and `/en/blog`
- `/blog/[slug]` and `/en/blog/[slug]`
- `/privacy` and `/en/privacy`
- `/404`

## Local Development

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Content Collections

Blog posts live in:

- `src/content/blog/zh/*.md`
- `src/content/blog/en/*.md`

Collection schema is defined in `src/content/config.ts`.

## I18n Strategy

Route-based locale:

- Chinese is default (`/`)
- English under `/en`

Language switcher preserves current path shape when possible.

## SEO and Social

- Locale-aware metadata in `src/layouts/BaseLayout.astro`
- Canonical URL uses `site + path`
- OG placeholder image: `public/og-default.svg`
- Sitemap generated after build by `scripts/generate-sitemap.mjs`

To replace OG image later, add your new file under `public/` and update the `ogImage` path in `BaseLayout.astro`.

## GitHub Pages Deployment

Workflow file: `.github/workflows/deploy.yml`

### 1) Configure Astro site/base

`astro.config.mjs` supports env-based config:

- `SITE_URL` (example: `https://flowthemoment.com`)
- `BASE_PATH` (example: `/` for custom domain, or `/repo-name` for project pages)

### 2) GitHub repository settings

- Enable GitHub Pages
- Source: **GitHub Actions**

### 3) Domain setup

- `public/CNAME` is set to `flowthemoment.com`
- Point DNS to GitHub Pages according to GitHub docs

### 4) Deploy

Push to `main`, workflow builds `dist/` and deploys to Pages.

During build, `npm run build` runs:

1. `astro check`
2. `astro build`
3. `node scripts/generate-sitemap.mjs` (writes `dist/sitemap.xml`)

## Notes for Future Extension

- Waitlist form currently uses `mailto:` fallback with frontend-only success state.
- Replace with API endpoint when ready (e.g. serverless form handler).
- MDX is installed, so richer blog content can be added without changing build setup.
