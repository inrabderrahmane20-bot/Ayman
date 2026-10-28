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
    title: locale === 'fr' ? 'Protection Personnelle | Coach Ayman' : locale === 'ar' ? 'الحماية الشخصية | الكوتش أيمن' : 'Personal Protection Services | Coach Ayman',
    description: locale === 'fr' ? "Protection personnelle professionnelle et arrangements sur mesure, sous réserve des qualifications, autorisations et exigences de la mission." : locale === 'ar' ? 'خدمات الحماية الشخصية المهنية، مصممة حسب المتطلبات مع مراعاة المؤهلات والتراخيص ومتطلبات المهمة.' : "Professional personal protection arrangements tailored to your needs, subject to qualifications, authorization and assignment requirements.",
    path: '/private-services/personal-protection',
    absoluteTitle: true,
  });
}

export default function PersonalProtectionPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;

  const schema = [
    breadcrumbSchema(locale, [
      { name: ui.home[locale], path: '' },
      { name: locale === 'fr' ? 'Services Privés' : locale === 'ar' ? 'خدمات خاصة' : 'Private Services', path: '/private-services' },
      { name: locale === 'fr' ? 'Protection Personnelle' : locale === 'ar' ? 'الحماية الشخصية' : 'Personal Protection', path: '/private-services/personal-protection' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: locale === 'fr' ? 'Protection Personnelle' : locale === 'ar' ? 'الحماية الشخصية' : 'Personal Protection',
      description: locale === 'fr' ? "Protection personnelle professionnelle." : locale === 'ar' ? 'الحماية الشخصية المهنية.' : 'Professional personal protection.',
      url: absoluteUrl(locale, '/private-services/personal-protection'),
      provider: { '@id': `${SITE.url}/#person` },
    },
  ];

  const content = {
    en: {
      eyebrow: 'PERSONAL PROTECTION',
      h1: 'Professional Protection. Thoughtful Preparation.',
      intro: "Personal protection begins with a clear understanding of the assignment, its environment and the client's expectations. Submit a private enquiry to discuss the requirements of your proposed assignment, subject to the provider's qualifications, applicable authorization, availability and the nature of the requested service.",
      overviewTitle: 'Service overview',
      overviewBody: "Personal protection arrangements are considered on an individual basis. The scope depends on the specific engagement, location, timing and requirements of each assignment.",
      assignmentsTitle: 'Potential assignments',
      assignments: ['Private and professional engagements', 'Events and public appearances', 'Travel-related assignments', 'Individually assessed protection requirements'],
      assessmentTitle: 'Individual assessment',
      assessmentBody: 'Location, timing, duration, activity and relevant assignment requirements will be discussed before a proposal is made. Each request is evaluated for suitability and feasibility.',
      standardsTitle: 'Professional standards',
      standards: ['Discretion and confidentiality', 'Clear communication and agreed responsibilities', 'Punctuality and professionalism', 'Respectful conduct throughout the assignment'],
      scopeTitle: 'Scope and limitations',
      scopeBody: 'Transport, additional personnel, specialist security services, emergency response and other supplementary services are not automatically included. Any such elements must be discussed and agreed separately.',
      faqTitle: 'Frequently asked questions',
      faqs: [
        { q: 'Is service availability guaranteed?', a: 'No. Each enquiry is reviewed individually for availability, suitability and feasibility.' },
        { q: 'How much notice is needed?', a: 'Advance notice is preferred. The exact timeline depends on the assignment and availability.' },
        { q: 'How is pricing determined?', a: 'Pricing is established on a case-by-case basis after discussing scope, duration, location and requirements.' },
        { q: 'When is a booking confirmed?', a: 'A booking is confirmed only after agreement on terms and satisfaction of any applicable requirements.' },
      ],
      ctaTitle: 'Request Personal Protection',
      ctaBody: 'Discuss your assignment requirements with a confidential enquiry.',
    },
    fr: {
      eyebrow: 'PROTECTION PERSONNELLE',
      h1: 'Protection professionnelle. Préparation réfléchie.',
      intro: "La protection personnelle commence par une compréhension claire de la mission, de son environnement et des attentes du client. Soumettez une demande privée pour discuter des exigences de votre mission proposée, sous réserve des qualifications du prestataire, de l'autorisation applicable, de sa disponibilité et de la nature du service demandé.",
      overviewTitle: "Aperçu du service",
      overviewBody: "Les arrangements de protection personnelle sont examinés au cas par cas. La portée dépend de l'engagement spécifique, du lieu, du moment et des exigences de chaque mission.",
      assignmentsTitle: 'Missions potentielles',
      assignments: ['Engagements privés et professionnels', "Événements et apparitions publiques", 'Missions liées aux voyages', "Exigences de protection évaluées individuellement"],
      assessmentTitle: 'Évaluation individuelle',
      assessmentBody: "Le lieu, le moment, la durée, l'activité et les exigences pertinentes de la mission seront discutés avant qu'une proposition ne soit faite. Chaque demande est évaluée pour sa pertinence et sa faisabilité.",
      standardsTitle: 'Standards professionnels',
      standards: ['Discrétion et confidentialité', 'Communication claire et responsabilités convenues', 'Ponctualité et professionnalisme', 'Conduite respectueuse tout au long de la mission'],
      scopeTitle: 'Portée et limitations',
      scopeBody: "Le transport, le personnel supplémentaire, les services de sécurité spécialisés, l'intervention d'urgence et autres services complémentaires ne sont pas automatiquement inclus. Ces éléments doivent être discutés et convenus séparément.",
      faqTitle: 'Questions fréquemment posées',
      faqs: [
        { q: "La disponibilité du service est-elle garantie ?", a: "Non. Chaque demande est examinée individuellement pour la disponibilité, la pertinence et la faisabilité." },
        { q: "Combien de préavis est nécessaire ?", a: "Un préavis est préférable. Le délai exact dépend de la mission et de la disponibilité." },
        { q: "Comment les prix sont-ils déterminés ?", a: "Les prix sont établis au cas par cas après discussion de la portée, de la durée, du lieu et des exigences." },
        { q: "Quand la réservation est-elle confirmée ?", a: "Une réservation n'est confirmée qu'après accord sur les termes et satisfaction des exigences applicables." },
      ],
      ctaTitle: 'Demander une protection personnelle',
      ctaBody: 'Discutez des exigences de votre mission avec une demande confidentielle.',
    },
    ar: {
      eyebrow: 'الحماية الشخصية',
      h1: 'حماية مهنية. إعداد مدروس.',
      intro: "تبدأ الحماية الشخصية بفهم واضح للمهمة وبيئتها وتوقعات العميل. أرسل استفسارًا خاصًا لمناقشة متطلبات المهمة المقترحة، مع مراعاة مؤهلات مقدم الخدمة والتراخيص المعمول بها والتوفر وطبيعة الخدمة المطلوبة.",
      overviewTitle: 'نظرة عامة على الخدمة',
      overviewBody: 'يتم النظر في ترتيبات الحماية الشخصية على أساس فردي. يعتمد النطاق على Engagement المحدد والموقع والتوقيت ومتطلبات كل مهمة.',
      assignmentsTitle: 'المهام المحتملة',
      assignments: ['الالتزامات الخاصة والمهنية', 'الأحداث والظهور العام', 'المهام المرتبطة بالسفر', 'متطلبات الحماية التي يتم تقييمها فرديًا'],
      assessmentTitle: 'التقييم الفردي',
      assessmentBody: 'سيتم مناقشة الموقع والتوقيت والمدة والنشاط ومتطلبات المهمة ذات الصلة قبل تقديم اقتراح. يتم تقييم كل طلب من حيث الملاءمة والجدوى.',
      standardsTitle: 'المعايير المهنية',
      standards: ['السرية والخصوصية', 'التواصل الواضح والمسؤوليات المتفق عليها', 'الالتزام بالمواعيد والاحترافية', 'السلوك المحترم طوال المهمة'],
      scopeTitle: 'النطاق والقيود',
      scopeBody: 'لا يتم تضمين النقل أو الموظفين الإضافيين أو خدمات الأمن المتخصصة أو الاستجابة للطوارئ أو الخدمات التكميلية الأخرى تلقائياً. يجب مناقشة هذه العناصر والاتفاق عليها بشكل منفصل.',
      faqTitle: 'الأسئلة الشائعة',
      faqs: [
        { q: 'هل يتم ضمان توفر الخدمة؟', a: 'لا. يتم مراجعة كل استفسار بشكل فردي من حيث التوفر والملاءمة والجدوى.' },
        { q: 'كم الإشعار المطلوب؟', a: 'يفضل الإشعار المسبق. يعتمد الجدول الزمني الدقيق على المهمة والتوفر.' },
        { q: 'كيف يتم تحديد الأسعار؟', a: 'يتم تحديد الأسعار على أساس كل حالة على حدة بعد مناقشة النطاق والمدة والموقع والمتطلبات.' },
        { q: 'متى يتم تأكيد الحجز؟', a: 'لا يتم تأكيد الحجز إلا بعد الاتفاق على الشروط والوفاء بأي متطلبات قابلة للتطبيق.' },
      ],
      ctaTitle: 'طلب الحماية الشخصية',
      ctaBody: 'ناقش متطلبات مهمتك مع استفسار سري.',
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
          <Link href={localePath(locale, '/private-services/request?service=protection')} className="btn btn-gold">
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
            <h2 className="font-display text-2xl text-bone sm:text-3xl">{t.overviewTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-stone-muted">{t.overviewBody}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl text-bone sm:text-3xl">{t.assignmentsTitle}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {t.assignments.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-stone-muted">
                  <Check width={16} height={16} className="mt-0.5 text-accent-soft" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl text-bone sm:text-3xl">{t.assessmentTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-stone-muted">{t.assessmentBody}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl text-bone sm:text-3xl">{t.standardsTitle}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {t.standards.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-stone-muted">
                  <Check width={16} height={16} className="mt-0.5 text-accent-soft" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-2xl text-bone sm:text-3xl">{t.scopeTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-stone-muted">{t.scopeBody}</p>
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
                  <Link href={localePath(locale, '/private-services/request?service=protection')} className="btn btn-gold">
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
