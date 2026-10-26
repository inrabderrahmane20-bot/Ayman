import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '../../../lib/content/types';
import { faqPage } from '../../../lib/content/pages';
import { ui } from '../../../lib/content/common';
import { absoluteUrl, SITE } from '../../../lib/site';
import { breadcrumbSchema, faqSchema, pageMetadata } from '../../../lib/seo';
import PageHeader from '../../../components/PageHeader';
import Accordion from '../../../components/Accordion';
import CtaSection from '../../../components/CtaSection';
import SeoJsonLd from '../../../components/SeoJsonLd';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: faqPage.metaTitle[locale],
    description: faqPage.metaDescription[locale],
    path: '/faq',
    absoluteTitle: true,
  });
}

export default function FaqPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;

  const allFaqs = faqPage.categories.flatMap((category) =>
    category.items.map((item) => ({ q: item.q[locale], a: item.a[locale] })),
  );

  const schema = [
    faqSchema(allFaqs),
    breadcrumbSchema(locale, [
      { name: ui.home[locale], path: '' },
      { name: faqPage.eyebrow[locale], path: '/faq' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: faqPage.h1[locale],
      description: faqPage.metaDescription[locale],
      url: absoluteUrl(locale, '/faq'),
      isPartOf: { '@id': `${SITE.url}/#website` },
    },
  ];

  return (
    <>
      <SeoJsonLd data={schema} />
      <PageHeader
        locale={locale}
        eyebrow={faqPage.eyebrow[locale]}
        title={faqPage.h1[locale]}
        intro={faqPage.intro[locale]}
        breadcrumbs={[{ name: faqPage.eyebrow[locale] }]}
      />

      <section className="section">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
          <nav aria-label={faqPage.eyebrow[locale]} className="lg:sticky lg:top-28">
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-dim">
              {faqPage.eyebrow[locale]}
            </p>
            <ul className="mt-4 space-y-2.5">
              {faqPage.categories.map((category) => (
                <li key={category.id}>
                  <a
                    href={`#faq-${category.id}`}
                    className="text-sm text-stone-muted transition-colors hover:text-accent-soft"
                  >
                    {category.title[locale]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-14">
            {faqPage.categories.map((category) => {
              const items = category.items.map((item) => ({
                q: item.q[locale],
                a: item.a[locale],
              }));
              return (
                <section
                  key={category.id}
                  id={`faq-${category.id}`}
                  className="scroll-mt-28"
                  aria-labelledby={`faq-${category.id}-title`}
                >
                  <h2
                    id={`faq-${category.id}-title`}
                    className="font-display text-[1.7rem] text-bone sm:text-3xl"
                  >
                    {category.title[locale]}
                  </h2>
                  <div className="mt-5">
                    <Accordion items={items} group={`faq-${category.id}`} />
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection
        locale={locale}
        eyebrow={faqPage.eyebrow[locale]}
        title={faqPage.ctaTitle[locale]}
        body={faqPage.ctaBody[locale]}
        primaryLabel={ui.askQuestion[locale]}
        primaryPath="/contact"
        secondaryLabel={ui.apply[locale]}
        secondaryPath="/apply"
        location="faq_final_cta"
      />
    </>
  );
}
