import type { Locale } from './content/types';
import { services } from './content/services';

/** Build a locale-prefixed path. Pass "" or "/" for the locale home. */
export function localePath(locale: Locale, path = ''): string {
  if (!path || path === '/') return `/${locale}`;
  return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Remove the locale segment from a pathname. Returns "/" for the home page. */
export function stripLocale(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return '/';
  const [, ...rest] = parts;
  return rest.length ? `/${rest.join('/')}` : '/';
}

export function localeFromPath(pathname: string): Locale | null {
  const first = pathname.split('/').filter(Boolean)[0];
  return first === 'en' || first === 'fr' || first === 'ar' ? first : null;
}

export const mainNav = [
  { path: '/coaching', key: 'coaching' },
  { path: '/private-services', key: 'privateServices' },
  { path: '/results', key: 'results' },
  { path: '/about', key: 'about' },
  { path: '/pricing', key: 'pricing' },
  { path: '/faq', key: 'faq' },
  { path: '/contact', key: 'contact' },
] as const;

export const servicePaths = services.map((service) => `/coaching/${service.slug}`);

/** Paths that should appear in the sitemap, without locale prefixes. */
export const indexablePaths = [
  '',
  '/coaching',
  ...servicePaths,
  '/private-services',
  '/private-services/personal-protection',
  '/private-services/private-accompaniment',
  '/private-services/how-it-works',
  '/private-services/request',
  '/results',
  '/about',
  '/pricing',
  '/faq',
  '/contact',
  '/apply',
  '/privacy',
  '/terms',
  '/cookies',
] as const;

/** Legacy URLs that must 301 to a locale-prefixed equivalent. */
export const legacyRedirects: Record<string, string> = {
  '/home': '',
  '/about': '/about',
  '/coaching': '/coaching',
  '/pricing': '/pricing',
  '/transformations': '/results',
  '/results': '/results',
  '/apply': '/apply',
  '/contact': '/contact',
  '/privacy': '/privacy',
  '/terms': '/terms',
  '/faq': '/faq',
  '/personal-protection': '/personal-protection',
  '/private-services': '/private-services',
  '/private-services/personal-protection': '/private-services/personal-protection',
  '/private-services/private-accompaniment': '/private-services/private-accompaniment',
  '/private-services/how-it-works': '/private-services/how-it-works',
  '/private-services/request': '/private-services/request',
  '/cookies': '/cookies',
};
