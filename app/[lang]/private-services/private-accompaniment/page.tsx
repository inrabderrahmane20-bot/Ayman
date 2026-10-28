import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { isLocale, type Locale } from '../../../../lib/content/types';
import { ui } from '../../../../lib/content/common';
import { SITE, absoluteUrl } from '../../../../lib/site';
import { breadcrumbSchema, pageMetadata } from '../../../../lib/seo';
import { localePath } from '../../../../lib/routes';
import PageHeader from '../../../../components/PageHeader';
import Reveal from '../../../../components/Reveal';
import SeoJsonLd from '../../../../components/SeoJsonLd';
import { Arrow, Check } from '../../../../components/Icons';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: locale === 'fr' ? 'Accompagnement Privé | Coach Ayman' : locale === 'ar' ? 'المرافقة الخاصة | الكوتش أيمن' : 'Private Accompaniment | Coach Ayman',
    description: locale === 'fr' ? "Accompagnement professionnel pour engagements d'affaires, occasions sociales, dîners, voyages et plus encore." : locale === 'ar' ? 'مرافقة مهنية للالتزامات التجارية والمناسبات الاجتماعية والعشاء والسفر والمزيد.' : 'Professional accompaniment for business engagements, social occasions, dinners, travel and more.',
    path: '/private-services/private-accompaniment',
    absoluteTitle: true,
  });
}

export default function PrivateAccompanimentPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;

  const schema = [
    breadcrumbSchema(locale, [
      { name: ui.home[locale], path: '' },
      { name: locale === 'fr' ? 'Services Privés' : locale === 'ar' ? 'خدمات خاصة' : 'Private Services', path: '/private-services' },
      { name: locale === 'fr' ? 'Accompagnement Privé' : locale === 'ar' ? 'المرافقة الخاصة' : 'Private Accompaniment', path: '/private-services/private-accompaniment' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: locale === 'fr' ? 'Accompagnement Privé' : locale === 'ar' ? 'المرافقة الخاصة' : 'Private Accompaniment',
      description: locale === 'fr' ? "Accompagnement professionnel personnel." : locale === 'ar' ? 'المرافقة الشخصية المهنية.' : 'Professional personal accompaniment.',
      url: absoluteUrl(locale, '/private-services/private-accompaniment'),
      provider: { '@id': `${SITE.url}/#person` },
    },
  ];

  const content = {
    en: {
      eyebrow: 'PRIVATE ACCOMPANIMENT',
      h1: 'A Professional Companion for Your Plans.',
      intro: 'From professional engagements to social occasions and travel experiences, private accompaniment is arranged around the occasion and the client’s preferences. Discuss your plans with Coach Ayman to establish the appropriate arrangements, duration and expectations before confirming a booking.',
      businessTitle: 'Business accompaniment',
      business: ['Meetings and professional events', 'Business dinners and networking', 'Agreed business itineraries'],
      socialTitle: 'Social occasions',
      social: ['Dinners and celebrations', 'Cultural outings and city experiences', 'Private gatherings'],
      travelTitle: 'Travel accompaniment',
      travel: ['City visits and tourism activities', 'Airport/transit support by arrangement', 'Pre-arranged travel itineraries'],
      flexibleTitle: 'Flexible arrangements',
      flexibleBody: 'Enquiries for a few hours, half-day, full-day or multiple days are welcome, subject to availability and agreed terms.',
      expectationsTitle: 'Clear expectations',
      expectationsBody: 'Agreed timings, meeting arrangements, scope of service, responsibilities and professional boundaries are discussed in advance. Accompaniment does not automatically include bodyguard services, transport, accommodation or other extras — these must be discussed and agreed separately.',
      faqTitle: 'Frequently asked questions',
      faqs: [
        { q: 'Which locations are covered?', a: 'Coverage depends on location and availability. Discuss your destination when enquiring.' },
        { q: 'How is pricing established?', a: 'Pricing is based on duration, location, occasion and specific requirements discussed during review.' },
        { q: 'When is a booking confirmed?', a: 'A booking is only confirmed after agreement on terms. Submitting an enquiry does not guarantee availability.' },
        { q: 'Is this the same as personal protection?', a: 'No. Private accompaniment is a professional presence service. Personal protection is a separate offering subject to different requirements.' },
      ],
      ctaTitle: 'Request Private Accompaniment',
      ctaBody: 'Discuss your plans for a tailored accompaniment arrangement.',
    },
    fr: {
      eyebrow: 'ACCOMPAGNEMENT PRIVÉ',
      h1: 'Un compagnon professionnel pour vos projets.',
      intro: "Des engagements professionnels aux occasions sociales et aux voyages, l'accompagnement privé est organisé autour de l'occasion et des préférences du client. Discutez de vos projets avec Coach Ayman pour établir les arrangements appropriés, la durée et les attentes avant de confirmer une réservation.",
      businessTitle: "Accompagnement professionnel",
      business: ['Réunions et événements professionnels', "Dîners d'affaires et réseautage", "Itinéraires professionnels convenus"],
      socialTitle: 'Occasions sociales',
      social: ['Dîners et célébrations', 'Sorties culturelles et expériences urbaines', 'Rassemblements privés'],
      travelTitle: 'Accompagnement de voyage',
      travel: ['Visites de ville et activités touristiques', "Support aéroport/transit sur arrangement", "Itinéraires de voyage pré-arrangés"],
      flexibleTitle: 'Arrangements flexibles',
      flexibleBody: "Les demandes pour quelques heures, une demi-journée, une journée complète ou plusieurs jours sont les bienvenues, sous réserve de disponibilité et de conditions convenues.",
      expectationsTitle: 'Attentes claires',
      expectationsBody: "Les horaires convenus, les arrangements de rencontre, la portée du service, les responsabilités et les limites professionnelles sont discutés à l'avance. L'accompagnement n'inclut pas automatiquement les services de garde du corps, le transport, l'hébergement ou autres extras — ils doivent être discutés et convenus séparément.",
      faqTitle: 'Questions fréquemment posées',
      faqs: [
        { q: 'Quelles zones sont couvertes ?', a: "La couverture dépend du lieu et de la disponibilité. Discutez de votre destination lors de la demande." },
        { q: 'Comment les prix sont-ils établis ?', a: "Les prix sont basés sur la durée, le lieu, l'occasion et les exigences spécifiques discutées lors de l'examen." },
        { q: "Quand la réservation est-elle confirmée ?", a: "Une réservation n'est confirmée qu'après accord sur les termes. Soumettre une demande ne garantit pas la disponibilité." },
        { q: "Est-ce la même chose que la protection personnelle ?", a: "Non. L'accompagnement privé est un service de présence professionnelle. La protection personnelle est une offre distincte avec des exigences différentes." },
      ],
      ctaTitle: "Demander un accompagnement privé",
      ctaBody: 'Discutez de vos projets pour un arrangement d’accompagnement sur mesure.',
    },
    ar: {
      eyebrow: 'المرافقة الخاصة',
      h1: 'رفيق مهني لخططك.',
      intro: 'من الالتزامات المهنية إلى المناسبات الاجتماعية وتجارب السفر، يتم ترتيب المرافقة الخاصة حول المناسبة وتفضيلات العميل. ناقش خططك مع الكوتش أيمن لتحديد الترتيبات المناسبة والمدة والتوقعات قبل تأكيد الحجز.',
      businessTitle: 'المرافقة التجارية',
      business: ['الاجتماعات والأحداث المهنية', 'عشاء الأعمال والتواصل', 'مسارات الأعمال المتفق عليها'],
      socialTitle: 'المناسبات الاجتماعية',
      social: ['العشاء والاحتفالات', 'الزيارات الثقافية وتجارب المدينة', 'التجمعات الخاصة'],
      travelTitle: 'مرافقة السفر',
      travel: ['زيارات المدينة والأنشطة السياحية', 'دعم المطار/العبور بالترتيب', 'مسارات السفر المعدة مسبقًا'],
      flexibleTitle: 'ترتيبات مرنة',
      flexibleBody: 'نرحب بالاستفسارات لعدة ساعات أو نصف يوم أو يوم كامل أو عدة أيام، مع مراعاة التوفر والشروط المتفق عليها.',
      expectationsTitle: 'توقعات واضحة',
      expectationsBody: 'يتم مناقشة التوقيت المتفق عليه وترتيبات اللقاء ونطاق الخدمة والمسؤوليات والحدود المهنية مسبقًا. لا تشمل المرافقة تلقائياً خدمات الحراسة الشخصية أو النقل أو الإقامة أو غيرها من الإضافات — يجب مناقشتها والاتفاق عليها بشكل منفصل.',
      faqTitle: 'الأسئلة الشائعة',
      faqs: [
        { q: 'ما المناطق التي تغطيها الخدمة؟', a: 'يعتمد التغطية على الموقع والتوفر. ناقش وجهتك عند الاستفسار.' },
        { q: 'كيف يتم تحديد الأسعار؟', a: 'تستند الأسعار إلى المدة والموقع والمناسبة والمتطلبات المحددة التي نناقشها أثناء المراجعة.' },
        { q: 'متى يتم تأكيد الحجز؟', a: 'لا يتم تأكيد الحجز إلا بعد الاتفاق على الشروط. إرسال الاستفسار لا يضمن التوفر.' },
        { q: 'هل هذا نفس الحماية الشخصية؟', a: 'لا. المرافقة الخاصة هي خدمة وجود مهني. الحماية الشخصية عرض منفصل له متطلبات مختلفة.' },
      ],
      ctaTitle: 'طلب المرافقة الخاصة',
      ctaBody: 'ناقش خططك لترتيب مرافقة مخصصة.',
    },
  };

  const t = content[locale];

  return (
    <>
      <SeoJsonLd data={schema} />
      <PageHeader
        locale={locale}
        eyebrow={t.eyebrow}
        title={t.h1}
        intro={t.intro}
        breadcrumbs={[
          { name: locale === 'fr' ? 'Services Privés' : locale === 'ar' ? 'خدمات خاصة' : 'Private Services', path: '/private-services' },
          { name: t.eyebrow },
        ]}
      >
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
          <Link href={localePath(locale, '/private-services/request?service=accompaniment')} className="btn btn-gold">
            {t.ctaTitle}
            <Arrow width={15} height={15} />
          </Link>
          <Link href={localePath(locale, '/private-services')} className="btn btn-outline">
            {locale === 'fr' ? 'Retour aux services' : locale === 'ar' ? 'العودة للخدمات' : 'Back to services'}
            <Arrow width={15} height={15} />
          </Link>
        </div>
      </PageHeader>

      <section className="section">
        <div className="container-luxe max-w-4xl space-y-10">
          <Reveal>
            <h2 className="font-display text-2xl text-bone sm:text-3xl">{t.businessTitle}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {t.business.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-stone-muted">
                  <Check width={16} height={16} className="mt-0.5 text-accent-soft" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl text-bone sm:text-3xl">{t.socialTitle}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {t.social.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-stone-muted">
                  <Check width={16} height={16} className="mt-0.5 text-accent-soft" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl text-bone sm:text-3xl">{t.travelTitle}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {t.travel.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-stone-muted">
                  <Check width={16} height={16} className="mt-0.5 text-accent-soft" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl text-bone sm:text-3xl">{t.flexibleTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-stone-muted">{t.flexibleBody}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl text-bone sm:text-3xl">{t.expectationsTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-stone-muted">{t.expectationsBody}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl text-bone sm:text-3xl">{t.faqTitle}</h2>
            <div className="mt-6 space-y-4">
              {t.faqs.map((faq) => (
                <article key={faq.q} className="panel p-6">
                  <h3 className="font-display text-lg text-bone">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-muted">{faq.a}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-luxe">
          <div className="panel relative overflow-hidden px-6 py-10 text-center sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-72 w-[40rem] glow-gold opacity-20" />
            <div className="relative mx-auto max-w-3xl">
              <Reveal>
                <h2 className="font-display text-3xl text-bone sm:text-4xl">{t.ctaTitle}</h2>
                <p className="mt-4 text-base leading-relaxed text-stone-muted">{t.ctaBody}</p>
                <div className="mt-8 flex justify-center">
                  <Link href={localePath(locale, '/private-services/request?service=accompaniment')} className="btn btn-gold">
                    {t.ctaTitle}
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
