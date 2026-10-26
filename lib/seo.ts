import type { Metadata } from 'next';
import { SITE, absoluteUrl } from './site';
import { locales, type Locale } from './content/types';
import type { Faq } from './content/types';
import type { ServiceContent } from './content/services';

const OG_IMAGE = {
  url: `${SITE.url}/og-image.png`,
  width: 1200,
  height: 630,
  alt: 'Coach Ayman — online fitness and nutrition coaching',
};

type PageMeta = {
  title: string;
  description: string;
  /** Path after the locale, e.g. "/pricing" or "" for home. */
  path: string;
  noindex?: boolean;
  absoluteTitle?: boolean;
};

export function pageMetadata(locale: Locale, meta: PageMeta): Metadata {
  const canonical = absoluteUrl(locale, meta.path);
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = absoluteUrl(l, meta.path);
  languages['x-default'] = absoluteUrl('en', meta.path);

  return {
    title: meta.absoluteTitle ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: SITE.name,
      title: meta.title,
      description: meta.description,
      locale: locale === 'en' ? 'en_US' : locale === 'fr' ? 'fr_FR' : 'ar_MA',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE.url],
    },
    robots: meta.noindex
      ? { index: false, follow: true, nocache: true }
      : { index: true, follow: true },
  };
}

/** JSON-safe script for structured data. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    founder: { '@id': `${SITE.url}/#person` },
    areaServed: [
      { '@type': 'Country', name: 'Morocco' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Qatar' },
    ],
    knowsLanguage: ['en', 'fr', 'ar'],
    description:
      'Online fitness and nutrition coaching with written plans, scheduled reviews and direct support.',
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/#person`,
    name: SITE.coachName,
    jobTitle: 'Online fitness and nutrition coach',
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    knowsLanguage: ['en', 'fr', 'ar'],
    worksFor: { '@id': `${SITE.url}/#organization` },
    address: { '@type': 'PostalAddress', addressCountry: 'MA' },
  };
}

export function websiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: locale,
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

export function serviceSchema(service: ServiceContent, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name[locale],
    serviceType: service.name[locale],
    description: service.metaDescription[locale],
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: absoluteUrl(locale, `/coaching/${service.slug}`),
      servicePhone: SITE.phone,
    },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function breadcrumbSchema(
  locale: Locale,
  items: Array<{ name: string; path: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(locale, item.path),
    })),
  };
}
