import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '../../../lib/content/types';
import { terms } from '../../../lib/content/legal';
import { ui } from '../../../lib/content/common';
import { breadcrumbSchema, pageMetadata } from '../../../lib/seo';
import PageHeader from '../../../components/PageHeader';
import LegalBody from '../../../components/LegalBody';
import SeoJsonLd from '../../../components/SeoJsonLd';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: terms.metaTitle[locale],
    description: terms.metaDescription[locale],
    path: '/terms',
    absoluteTitle: true,
  });
}

export default function TermsPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;

  return (
    <>
      <SeoJsonLd
        data={breadcrumbSchema(locale, [
          { name: ui.home[locale], path: '' },
          { name: terms.eyebrow[locale], path: '/terms' },
        ])}
      />
      <PageHeader
        locale={locale}
        eyebrow={terms.eyebrow[locale]}
        title={terms.h1[locale]}
        intro={terms.intro[locale]}
        breadcrumbs={[{ name: terms.eyebrow[locale] }]}
      />
      <LegalBody locale={locale} sections={terms.sections} />
    </>
  );
}
