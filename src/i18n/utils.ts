export type Locale = 'zh' | 'en';

export const defaultLocale: Locale = 'zh';

function normalizedBase(base: string): string {
  if (!base || base === '/') return '/';
  return `/${base.replace(/^\/+|\/+$/g, '')}/`;
}

function trimTrailingSlash(path: string): string {
  return path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
}

export function stripBase(pathname: string, base = import.meta.env.BASE_URL): string {
  const path = trimTrailingSlash(pathname || '/');
  const cleanBase = normalizedBase(base);

  if (cleanBase === '/') return path || '/';
  const withoutEnd = cleanBase.slice(0, -1);
  if (path === withoutEnd) return '/';
  if (path.startsWith(cleanBase)) {
    const next = `/${path.slice(cleanBase.length)}`.replace(/\/{2,}/g, '/');
    return next || '/';
  }
  return path || '/';
}

export function withBase(path: string, base = import.meta.env.BASE_URL): string {
  const cleanBase = normalizedBase(base);
  const safePath = path.startsWith('/') ? path : `/${path}`;
  if (cleanBase === '/') return safePath;
  if (safePath === '/') return cleanBase;
  return `${cleanBase.slice(0, -1)}${safePath}`;
}

export function getLocaleFromPath(pathname: string): Locale {
  const cleanPath = stripBase(pathname);
  return cleanPath === '/en' || cleanPath.startsWith('/en/') ? 'en' : 'zh';
}

export function toLocalePath(pathname: string, target: Locale, base = import.meta.env.BASE_URL): string {
  const normalized = stripBase(pathname, base);

  if (target === 'en') {
    if (normalized === '/en' || normalized.startsWith('/en/')) return withBase(normalized, base);
    return normalized === '/' ? withBase('/en', base) : withBase(`/en${normalized}`, base);
  }

  if (normalized === '/en') return withBase('/', base);
  if (normalized.startsWith('/en/')) {
    const path = normalized.replace(/^\/en/, '');
    return withBase(path || '/', base);
  }
  return withBase(normalized || '/', base);
}

export function pathFor(locale: Locale, route: 'home' | 'apps' | 'about' | 'blog' | 'privacy'): string {
  const zh = {
    home: '/',
    apps: '/apps',
    about: '/about',
    blog: '/blog',
    privacy: '/privacy'
  };

  if (locale === 'zh') return zh[route];
  return zh[route] === '/' ? '/en' : `/en${zh[route]}`;
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}
