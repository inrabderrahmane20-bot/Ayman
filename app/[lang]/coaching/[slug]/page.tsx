import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, locales, type Locale } from '../../../../lib/content/types';
import { services, serviceBySlug } from '../../../../lib/content/services';
import { plans } from '../../../../lib/content/home';
import { ui } from '../../../../lib/content/common';
import { localePath } from '../../../../lib/routes';
import {
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  serviceSchema,
} from '../../../../lib/seo';
import { Arrow, Check, iconMap } from '../../../../components/Icons';
import PageHeader from '../../../../components/PageHeader';
import Reveal from '../../../../components/Reveal';
import Accordion from '../../../../components/Accordion';
import CtaSection from '../../../../components/CtaSection';
import TrackedNextLink from '../../../../components/TrackedNextLink';
import SeoJsonLd from '../../../../components/SeoJsonLd';

export function generateStaticParams() {
  return locales.flatMap((lang) => services.map((service) => ({ lang, slug: service.slug })));
}

// Only the four published services exist. Unknown slugs are handled by the
// segment's not-found boundary instead of being rendered on demand.
export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Metadata {
  if (!isLocale(params.lang)) return {};
  const service = serviceBySlug(params.slug);
  if (!service) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: service.metaTitle[locale],
    description: service.metaDescription[locale],
    path: `/coaching/${service.slug}`,
    absoluteTitle: true,
  });
}

export default function ServicePage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;
  const service = serviceBySlug(params.slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const faqs = service.faq[locale];
  const related = services.filter((item) => item.slug !== service.slug);
  const lowestPrice = plans.reduce((min, plan) => Math.min(min, plan.price), plans[0].price);

  const schema = [
    serviceSchema(service, locale),
    faqSchema(faqs),
    breadcrumbSchema(locale, [
      { name: ui.home[locale], path: '' },
      { name: ui.coaching[locale], path: '/coaching' },
      { name: service.name[locale], path: `/coaching/${service.slug}` },
    ]),
  ];

  return (
    <>
      <SeoJsonLd data={schema} />
      <PageHeader
        locale={locale}
        eyebrow={service.eyebrow[locale]}
        title={service.h1[locale]}
        intro={service.intro[locale]}
        breadcrumbs={[
          { name: ui.coaching[locale], path: '/coaching' },
          { name: service.name[locale] },
        ]}
      >
        <TrackedNextLink
          href={localePath(locale, '/apply')}
          event="cta_click"
          location={`service_header_${service.slug}`}
          label="apply"
          className="btn btn-gold"
        >
          {ui.apply[locale]}
          <Arrow width={16} height={16} />
        </TrackedNextLink>
      </PageHeader>

      <section className="section">
        <div className="container-luxe grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div className="space-y-12">
            {service.sections[locale].map((section, index) => (
              <Reveal key={section.title} delay={index * 50}>
                <section aria-labelledby={`service-section-${index}`}>
                  <h2
                    id={`service-section-${index}`}
                    className="font-display text-[1.65rem] leading-tight text-bone sm:text-3xl"
                  >
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.body?.map((paragraph) => (
                      <p key={paragraph} className="text-[0.98rem] leading-relaxed text-stone-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className="mt-5 space-y-2.5 border-s border-white/10 ps-5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-muted">
                          <Check width={15} height={15} className="mt-1 shrink-0 text-accent-soft" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="panel-raised p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-accent-soft">
                  <Icon width={20} height={20} />
                </span>
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.18em] text-dim">
                    {service.eyebrow[locale]}
                  </p>
                  <p className="font-display text-lg text-bone">{service.name[locale]}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-stone-muted">
                {service.summary[locale]}
              </p>
              <p className="mt-5 border-t border-white/10 pt-4 text-xs text-dim">
                {ui.from[locale]}{' '}
                <span className="tnum font-display text-xl text-bone">${lowestPrice}</span>{' '}
                {ui.perMonth[locale]} · {ui.usd[locale]}
              </p>
              <TrackedNextLink
                href={localePath(locale, '/apply')}
                event="cta_click"
                location={`service_sidebar_${service.slug}`}
                label="apply"
                className="btn btn-gold mt-5 w-full"
              >
                {ui.apply[locale]}
                <Arrow width={15} height={15} />
              </TrackedNextLink>
              <Link href={localePath(locale, '/pricing')} className="btn btn-ghost btn-sm mt-2 w-full">
                {ui.viewPlans[locale]}
              </Link>
            </div>

            <div className="panel p-6">
              <h2 className="text-[0.68rem] uppercase tracking-[0.18em] text-dim">
                {locale === 'fr' ? 'Pour qui' : locale === 'ar' ? 'لمن' : 'Who it is for'}
              </h2>
              <ul className="mt-4 space-y-3">
                {service.forWho[locale].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-muted">
                    <Check width={15} height={15} className="mt-0.5 shrink-0 text-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="service-faq-title">
        <div className="container-luxe grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="eyebrow">{ui.faq[locale]}</span>
            <h2 id="service-faq-title" className="display mt-5 text-[2rem] text-bone sm:text-4xl">
              {service.name[locale]}
            </h2>
            <p className="lede mt-4">{service.ctaText[locale]}</p>
          </div>
          <Accordion items={faqs} group={`service-${service.slug}`} />
        </div>
      </section>

      <section className="section" aria-labelledby="related-title">
        <div className="container-luxe">
          <h2 id="related-title" className="text-[0.68rem] uppercase tracking-[0.18em] text-dim">
            {ui.related[locale]}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={localePath(locale, `/coaching/${item.slug}`)}
                className="card card-hover flex items-center justify-between gap-3 p-5"
              >
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.16em] text-dim">
                    {item.eyebrow[locale]}
                  </p>
                  <p className="mt-1.5 font-display text-lg text-bone">{item.name[locale]}</p>
                </div>
                <Arrow width={16} height={16} className="shrink-0 text-accent-soft" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        locale={locale}
        eyebrow={service.eyebrow[locale]}
        title={service.ctaTitle[locale]}
        body={service.ctaText[locale]}
        primaryLabel={ui.apply[locale]}
        secondaryLabel={ui.askQuestion[locale]}
        secondaryPath="/contact"
        location={`service_final_${service.slug}`}
      />
    </>
  );
}
