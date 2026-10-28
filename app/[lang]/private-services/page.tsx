import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { isLocale, type Locale } from '../../../lib/content/types';
import { privateServicesPage } from '../../../lib/content/private-services';
import { ui, nav } from '../../../lib/content/common';
import { SITE, absoluteUrl } from '../../../lib/site';
import { breadcrumbSchema, pageMetadata } from '../../../lib/seo';
import { localePath } from '../../../lib/routes';
import PageHeader from '../../../components/PageHeader';
import Reveal from '../../../components/Reveal';
import SeoJsonLd from '../../../components/SeoJsonLd';
import { Arrow, Check } from '../../../components/Icons';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: privateServicesPage.metaTitle[locale],
    description: privateServicesPage.metaDescription[locale],
    path: '/private-services',
    absoluteTitle: true,
  });
}

export default function PrivateServicesPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;

  const schema = [
    breadcrumbSchema(locale, [
      { name: ui.home[locale], path: '' },
      { name: privateServicesPage.eyebrow[locale], path: '/private-services' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: privateServicesPage.h1[locale],
      description: privateServicesPage.metaDescription[locale],
      url: absoluteUrl(locale, '/private-services'),
      provider: { '@id': `${SITE.url}/#person` },
    },
  ];

  return (
    <>
      <SeoJsonLd data={schema} />
      <PageHeader
        locale={locale}
        eyebrow={privateServicesPage.eyebrow[locale]}
        title={privateServicesPage.h1[locale]}
        intro={privateServicesPage.intro[locale]}
        breadcrumbs={[{ name: privateServicesPage.eyebrow[locale] }]}
      >
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
          <Link href={localePath(locale, '/private-services/request')} className="btn btn-gold">
            {privateServicesPage.enquire[locale]}
            <Arrow width={15} height={15} />
          </Link>
          <Link href={localePath(locale, '/private-services#services')} className="btn btn-outline">
            {privateServicesPage.explore[locale]}
            <Arrow width={15} height={15} />
          </Link>
        </div>
      </PageHeader>

      <section className="section">
        <div className="container-luxe max-w-4xl">
          <Reveal>
            <h2 className="font-display text-3xl text-bone sm:text-4xl">{privateServicesPage.introTitle[locale]}</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-muted">
              {privateServicesPage.introBody[locale].split('\n\n').map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section section-alt">
        <div className="container-luxe">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{locale === 'fr' ? 'NOS OFFRES' : locale === 'ar' ? 'عروضنا' : 'OUR SERVICES'}</p>
            <h2 className="mt-4 font-display text-3xl text-bone sm:text-4xl lg:text-5xl">
              {locale === 'fr' ? 'Deux offres distinctes' : locale === 'ar' ? 'عرضان متميزان' : 'Two Distinct Offerings'}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal delay={80}>
              <article className="panel group relative overflow-hidden p-8 sm:p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
                <div className="relative">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent-soft">{privateServicesPage.cards.protection.category[locale]}</p>
                  <h3 className="mt-4 font-display text-3xl text-bone">{privateServicesPage.cards.protection.title[locale]}</h3>
                  <p className="mt-4 text-base leading-relaxed text-stone-muted">{privateServicesPage.cards.protection.desc[locale]}</p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-3 text-sm text-stone-muted">
                      <Check width={16} height={16} className="mt-0.5 text-accent-soft" />
                      <span>{locale === 'fr' ? 'Engagements privés et professionnels' : locale === 'ar' ? 'التزامات خاصة ومهنية' : 'Private and professional engagements'}</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-stone-muted">
                      <Check width={16} height={16} className="mt-0.5 text-accent-soft" />
                      <span>{locale === 'fr' ? 'Événements et apparitions publiques' : locale === 'ar' ? 'الأحداث والظهور العام' : 'Events and public appearances'}</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-stone-muted">
                      <Check width={16} height={16} className="mt-0.5 text-accent-soft" />
                      <span>{locale === 'fr' ? 'Voyages et missions liées aux déplacements' : locale === 'ar' ? 'السفر والمهام المرتبطة بالسفر' : 'Travel-related assignments'}</span>
                    </li>
                  </ul>
                  <Link href={localePath(locale, '/private-services/personal-protection')} className="btn btn-gold btn-sm mt-8">
                    {privateServicesPage.cards.protection.cta[locale]}
                    <Arrow width={14} height={14} />
                  </Link>
                </div>
              </article>
            </Reveal>
            <Reveal delay={160}>
              <article className="panel group relative overflow-hidden p-8 sm:p-10">
                <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-accent/8 blur-3xl" />
                <div className="relative">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-accent-soft">{privateServicesPage.cards.accompaniment.category[locale]}</p>
                  <h3 className="mt-4 font-display text-3xl text-bone">{privateServicesPage.cards.accompaniment.title[locale]}</h3>
                  <p className="mt-4 text-base leading-relaxed text-stone-muted">{privateServicesPage.cards.accompaniment.desc[locale]}</p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-3 text-sm text-stone-muted">
                      <Check width={16} height={16} className="mt-0.5 text-accent-soft" />
                      <span>{locale === 'fr' ? 'Réunions et événements professionnels' : locale === 'ar' ? 'الاجتماعات والأحداث المهنية' : 'Business meetings and professional events'}</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-stone-muted">
                      <Check width={16} height={16} className="mt-0.5 text-accent-soft" />
                      <span>{locale === 'fr' ? 'Dîners et occasions sociales' : locale === 'ar' ? 'العشاء والمناسبات الاجتماعية' : 'Dinners and social occasions'}</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-stone-muted">
                      <Check width={16} height={16} className="mt-0.5 text-accent-soft" />
                      <span>{locale === 'fr' ? 'Sorties culturelles et voyages' : locale === 'ar' ? 'الزيارات الثقافية والسفر' : 'Cultural outings and travel'}</span>
                    </li>
                  </ul>
                  <Link href={localePath(locale, '/private-services/private-accompaniment')} className="btn btn-outline btn-sm mt-8">
                    {privateServicesPage.cards.accompaniment.cta[locale]}
                    <Arrow width={14} height={14} />
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{locale === 'fr' ? 'OCCASIONS' : locale === 'ar' ? 'المناسبات' : 'OCCASIONS'}</p>
            <h2 className="mt-4 font-display text-3xl text-bone sm:text-4xl">{privateServicesPage.situations.title[locale]}</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {privateServicesPage.situations.items[locale].map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="panel h-full p-6">
                  <h3 className="font-display text-xl text-bone">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-muted">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-luxe">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{locale === 'fr' ? 'PROCESSUS' : locale === 'ar' ? 'العملية' : 'PROCESS'}</p>
            <h2 className="mt-4 font-display text-3xl text-bone sm:text-4xl">{privateServicesPage.howItWorks.title[locale]}</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {privateServicesPage.howItWorks.steps[locale].map((step, index) => (
              <Reveal key={step.num} delay={index * 70}>
                <article className="panel h-full p-6">
                  <p className="text-sm text-accent-soft">{step.num}</p>
                  <h3 className="mt-3 font-display text-xl text-bone">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-muted">{step.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{locale === 'fr' ? 'VALEURS' : locale === 'ar' ? 'القيم' : 'VALUES'}</p>
            <h2 className="mt-4 font-display text-3xl text-bone sm:text-4xl">{privateServicesPage.trust.title[locale]}</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {privateServicesPage.trust.items[locale].map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="panel h-full p-6">
                  <h3 className="font-display text-lg text-bone">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-muted">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-luxe">
          <div className="panel relative overflow-hidden px-6 py-10 text-center sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-72 w-[40rem] glow-gold opacity-20" />
            <div className="relative mx-auto max-w-3xl">
              <Reveal>
                <p className="eyebrow centered justify-center">{locale === 'fr' ? 'DISCUTONS' : locale === 'ar' ? 'لنتحدث' : 'LET’S DISCUSS'}</p>
                <h2 className="mt-4 font-display text-3xl text-bone sm:text-4xl lg:text-5xl">{privateServicesPage.cta.title[locale]}</h2>
                <p className="mt-4 text-base leading-relaxed text-stone-muted">{privateServicesPage.cta.body[locale]}</p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                  <Link href={localePath(locale, '/private-services/request?service=protection')} className="btn btn-gold">
                    {privateServicesPage.cta.protection[locale]}
                    <Arrow width={15} height={15} />
                  </Link>
                  <Link href={localePath(locale, '/private-services/request?service=accompaniment')} className="btn btn-outline">
                    {privateServicesPage.cta.accompaniment[locale]}
                    <Arrow width={15} height={15} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
