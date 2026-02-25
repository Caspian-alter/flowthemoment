import { promises as fs } from 'node:fs';
import path from 'node:path';

const site = process.env.SITE_URL || 'https://flowthemoment.com';
const basePath = process.env.BASE_PATH || '/';
const distDir = path.resolve(process.cwd(), 'dist');

function normalizeBase(base) {
  if (!base || base === '/') return '/';
  return `/${base.replace(/^\/+|\/+$/g, '')}/`;
}

const base = normalizeBase(basePath);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(fullPath);
      return [fullPath];
    })
  );
  return files.flat();
}

function routeFromFile(filePath) {
  const rel = path.relative(distDir, filePath).replace(/\\/g, '/');
  if (!rel.endsWith('.html')) return null;

  if (rel === 'index.html') return '/';
  if (rel === '404.html' || rel === '500.html') return null;

  if (rel.endsWith('/index.html')) {
    return `/${rel.slice(0, -'index.html'.length)}`;
  }

  return `/${rel}`;
}

function withBase(route) {
  if (base === '/') return route;
  if (route === '/') return base;
  return `${base}${route.startsWith('/') ? route.slice(1) : route}`;
}

function toAbsoluteUrl(route) {
  return new URL(withBase(route), site).toString();
}

function xmlEscape(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function run() {
  const files = await walk(distDir);
  const urls = Array.from(
    new Set(files.map(routeFromFile).filter((item) => item !== null).map((route) => toAbsoluteUrl(route)))
  ).sort((a, b) => a.localeCompare(b));

  const today = new Date().toISOString();
  const body = urls
    .map((url) => `  <url>\n    <loc>${xmlEscape(url)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
    .join('\n');

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    body +
    '\n</urlset>\n';

  await fs.writeFile(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
  process.stdout.write(`sitemap.xml generated with ${urls.length} URLs\n`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
