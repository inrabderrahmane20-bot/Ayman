import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, isLocale, type Locale } from './lib/content/types';
import { legacyRedirects } from './lib/routes';

const ONE_YEAR = 60 * 60 * 24 * 365;

/** Files that must never be redirected through the locale negotiation. */
const ASSET =
  /\.(?:png|jpe?g|gif|svg|webp|avif|ico|txt|xml|json|webmanifest|pdf|zip|woff2?|ttf|otf|map|mp4|webm)$/i;

function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const header = request.headers.get('accept-language');
  if (!header) return defaultLocale;

  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((param) => param.trim().startsWith('q='));
      const quality = q ? Number.parseFloat(q.split('=')[1]) : 1;
      return { tag: tag.toLowerCase(), quality: Number.isFinite(quality) ? quality : 0 };
    })
    .filter((entry) => entry.quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const entry of ranked) {
    const short = entry.tag.slice(0, 2);
    if (isLocale(short)) return short;
  }
  return defaultLocale;
}

function normalize(pathname: string): string {
  const collapsed = pathname.replace(/\/{2,}/g, '/');
  if (collapsed === '/') return '/';
  return collapsed.replace(/\/+$/, '') || '/';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/.well-known') ||
    pathname === '/favicon.ico' ||
    ASSET.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  const hasLocale = Boolean(first && isLocale(first));
  const locale = hasLocale ? (first as Locale) : detectLocale(request);
  const rest = hasLocale ? `/${segments.slice(1).join('/')}` : pathname;
  const normalized = normalize(rest);
  const destination = legacyRedirects[normalized] ?? normalized;

  // Locale-prefixed legacy path, e.g. /fr/transformations -> /fr/results
  if (hasLocale && destination !== normalized) {
    const url = request.nextUrl.clone();
    url.pathname = destination === '' ? `/${locale}` : `/${locale}${destination}`;
    return NextResponse.redirect(url, 301);
  }

  // Unprefixed path. Root is language negotiation (temporary); legacy routes are
  // permanent redirects so their search equity moves to the new locale URLs.
  if (!hasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = destination === '' ? `/${locale}` : `/${locale}${destination}`;
    const status = normalized === '/' ? 307 : 301;
    const response = NextResponse.redirect(url, status);
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge: ONE_YEAR,
      sameSite: 'lax',
    });
    return response;
  }

  // An invalid locale-like segment (/de/about) has already been treated as an
  // unprefixed path above. Valid locales pass through.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', locale);
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  if (!request.cookies.get('NEXT_LOCALE')) {
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge: ONE_YEAR,
      sameSite: 'lax',
    });
  }
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
