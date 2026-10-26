import type { Metadata } from 'next';
import { headers } from 'next/headers';
import NotFoundContent from '../../components/NotFoundContent';
import { notFoundCopy } from '../../lib/content/common';
import { defaultLocale, isLocale } from '../../lib/content/types';

export function generateMetadata(): Metadata {
  const requested = headers().get('x-locale');
  const locale = requested && isLocale(requested) ? requested : defaultLocale;

  return {
    title: `404 — ${notFoundCopy.title[locale]}`,
    description: notFoundCopy.body[locale],
    robots: { index: false, follow: false },
    // A missing page must not claim the locale homepage as its canonical.
    alternates: { canonical: null },
    openGraph: {
      title: `404 — ${notFoundCopy.title[locale]}`,
      description: notFoundCopy.body[locale],
    },
    twitter: {
      title: `404 — ${notFoundCopy.title[locale]}`,
      description: notFoundCopy.body[locale],
    },
  };
}

export default function LocaleNotFound() {
  return <NotFoundContent />;
}
