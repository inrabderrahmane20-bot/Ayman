import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '../../../lib/content/types';
import { cookies } from '../../../lib/content/legal';
import { ui } from '../../../lib/content/common';
import { breadcrumbSchema, pageMetadata } from '../../../lib/seo';
import PageHeader from '../../../components/PageHeader';
import LegalBody from '../../../components/LegalBody';
import SeoJsonLd from '../../../components/SeoJsonLd';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: cookies.metaTitle[locale],
    description: cookies.metaDescription[locale],
    path: '/cookies',
    absoluteTitle: true,
  });
}

export default function CookiesPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;

  return (
    <>
      <SeoJsonLd
        data={breadcrumbSchema(locale, [
          { name: ui.home[locale], path: '' },
          { name: cookies.eyebrow[locale], path: '/cookies' },
        ])}
      />
      <PageHeader
        locale={locale}
        eyebrow={cookies.eyebrow[locale]}
        title={cookies.h1[locale]}
        intro={cookies.intro[locale]}
        breadcrumbs={[{ name: cookies.eyebrow[locale] }]}
      />
      <LegalBody locale={locale} sections={cookies.sections} />
    </>
  );
}
