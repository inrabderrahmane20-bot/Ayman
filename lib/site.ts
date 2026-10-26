/**
 * Central site configuration.
 *
 * The canonical origin is environment-driven. It must never be hard-coded to a
 * domain that this project does not control: the previous build pointed every
 * canonical, sitemap entry and robots line at https://coachayman.com, which is
 * a different live business.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ayman-nu.vercel.app'
).replace(/\/+$/, '');

export const SITE = {
  url: SITE_URL,
  name: 'AYMAN Coaching',
  coachName: 'Mohamed Ayman Yakhmim',
  email: 'aymanyakhmim1@gmail.com',
  phone: '+212707072662',
  phoneDisplay: '+212 707 072 662',
  whatsapp: 'https://wa.me/212707072662',
  country: 'Morocco',
  areaServed: 'Worldwide (online)',
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? '',
  siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  /**
   * Personal protection services must not be indexed or linked from primary
   * navigation until licensing, insurance, staffing and operations are verified.
   * Set NEXT_PUBLIC_PROTECTION_LIVE=true only after that verification.
   */
  protectionLive: process.env.NEXT_PUBLIC_PROTECTION_LIVE === 'true',
} as const;

export const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Coach Ayman — online fitness and nutrition coaching',
};

/** Absolute URL for a locale-prefixed path. */
export function absoluteUrl(locale: string, path = ''): string {
  const clean = path === '/' ? '' : path;
  return `${SITE.url}/${locale}${clean}`;
}

export function whatsappLink(message?: string): string {
  return message ? `${SITE.whatsapp}?text=${encodeURIComponent(message)}` : SITE.whatsapp;
}

export function mailtoLink(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return `mailto:${SITE.email}${query ? `?${query}` : ''}`;
}
