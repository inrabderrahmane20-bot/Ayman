import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '../../../lib/content/types';
import { privacy } from '../../../lib/content/legal';
import { ui } from '../../../lib/content/common';
import { breadcrumbSchema, pageMetadata } from '../../../lib/seo';
import PageHeader from '../../../components/PageHeader';
import LegalBody from '../../../components/LegalBody';
import SeoJsonLd from '../../../components/SeoJsonLd';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: privacy.metaTitle[locale],
    description: privacy.metaDescription[locale],
    path: '/privacy',
    absoluteTitle: true,
  });
}

export default function PrivacyPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;

  return (
    <>
      <SeoJsonLd
        data={breadcrumbSchema(locale, [
          { name: ui.home[locale], path: '' },
          { name: privacy.eyebrow[locale], path: '/privacy' },
        ])}
      />
      <PageHeader
        locale={locale}
        eyebrow={privacy.eyebrow[locale]}
        title={privacy.h1[locale]}
        intro={privacy.intro[locale]}
        breadcrumbs={[{ name: privacy.eyebrow[locale] }]}
      />
      <LegalBody locale={locale} sections={privacy.sections} />
    </>
  );
}
