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
import { Arrow } from '../../../../components/Icons';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const locale = params.lang;
  return pageMetadata(locale, {
    title: locale === 'fr' ? 'Comment fonctionnent les services privés | Coach Ayman' : locale === 'ar' ? 'كيف تعمل الخدمات الخاصة | الكوتش أيمن' : 'How Private Services Work | Coach Ayman',
    description: locale === 'fr' ? 'Processus de demande, discussion, proposition et confirmation pour les services privés.' : locale === 'ar' ? 'عملية الطلب والمناقشة والاقتراح والتأكيد للخدمات الخاصة.' : 'Enquiry, discussion, proposal and confirmation process for private services.',
    path: '/private-services/how-it-works',
    absoluteTitle: true,
  });
}

export default function HowItWorksPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale: Locale = params.lang;

  const schema = [
    breadcrumbSchema(locale, [
      { name: ui.home[locale], path: '' },
      { name: locale === 'fr' ? 'Services Privés' : locale === 'ar' ? 'خدمات خاصة' : 'Private Services', path: '/private-services' },
      { name: locale === 'fr' ? 'Comment ça fonctionne' : locale === 'ar' ? 'كيف يعمل' : 'How it works', path: '/private-services/how-it-works' },
    ]),
  ];

  const steps = {
    en: [
      { num: '01', title: 'Submit the initial enquiry.', desc: 'Provide the requested service, location, preferred dates, duration and relevant initial information via the enquiry form.' },
      { num: '02', title: 'Receive acknowledgement of the request.', desc: 'Your enquiry is received and will be reviewed. This acknowledgement does not confirm availability or a booking.' },
      { num: '03', title: 'Discuss requirements and service suitability.', desc: 'The requested service, availability, expectations, suitability and practical arrangements are reviewed together.' },
      { num: '04', title: 'Receive a written proposal.', desc: 'You receive the proposed scope, pricing, conditions and any applicable arrangements.' },
      { num: '05', title: 'Accept the terms and complete applicable payment arrangements.', desc: 'If you wish to proceed, accept the agreed terms and satisfy any applicable payment or documentation requirements.' },
      { num: '06', title: 'Receive explicit confirmation of the assignment.', desc: 'The assignment is confirmed only after acceptance of terms and satisfaction of applicable requirements.' },
      { num: '07', title: 'Receive any necessary practical details for the agreed engagement.', desc: 'Practical details are shared as needed for the confirmed assignment.' },
    ],
    fr: [
      { num: '01', title: "Soumettre la demande initiale.", desc: "Fournissez le service demandé, le lieu, les dates préférées, la durée et les informations initiales pertinentes via le formulaire." },
      { num: '02', title: "Recevoir un accusé de réception.", desc: "Votre demande est reçue et examinée. Cet accusé de réception ne confirme pas la disponibilité ni une réservation." },
      { num: '03', title: "Discuter des besoins et de la pertinence du service.", desc: "Le service demandé, la disponibilité, les attentes, la pertinence et les arrangements pratiques sont examinés ensemble." },
      { num: '04', title: "Recevoir une proposition écrite.", desc: "Vous recevez le périmètre proposé, les prix, les conditions et les arrangements applicables." },
      { num: '05', title: "Accepter les termes et effectuer les arrangements de paiement applicables.", desc: "Si vous souhaitez procéder, acceptez les termes convenus et satisfaites aux exigences de paiement ou de documentation applicables." },
      { num: '06', title: "Recevoir une confirmation explicite de la mission.", desc: "La mission n'est confirmée qu'après acceptation des termes et satisfaction des exigences applicables." },
      { num: '07', title: "Recevoir les détails pratiques nécessaires pour l'engagement convenu.", desc: "Les détails pratiques sont partagés selon les besoins pour la mission confirmée." },
    ],
    ar: [
      { num: '01', title: "إرسال الاستفسار الأولي.", desc: "قدم الخدمة المطلوبة والموقع والتواريخ المفضلة والمدة والمعلومات الأولية ذات الصلة عبر نموذج الاستفسار." },
      { num: '02', title: "تلقي إقرار بالطلب.", desc: "تم استلام استفسارك وسيتم مراجعته. هذا الإقرار لا يؤكد التوفر أو الحجز." },
      { num: '03', title: "مناقشة المتطلبات وملاءمة الخدمة.", desc: "يتم مراجعة الخدمة المطلوبة والتوفر والتوقعات والملاءمة والترتيبات العملية معًا." },
      { num: '04', title: "تلقي اقتراح مكتوب.", desc: "ستتلقى نطاق الاقتراح والأسعار والشروط وأي ترتيبات قابلة للتطبيق." },
      { num: '05', title: "قبول الشروط وإتمام ترتيبات الدفع القابلة للتطبيق.", desc: "إذا كنت ترغب في المتابعة، اقبل الشروط المتفق عليها وقم بالوفاء بأي متطلبات دفع أو وثائق قابلة للتطبيق." },
      { num: '06', title: "تلقي تأكيد صريح للمهمة.", desc: "لا يتم تأكيد المهمة إلا بعد قبول الشروط والوفاء بالمتطلبات القابلة للتطبيق." },
      { num: '07', title: "تلقي التفاصيل العملية اللازمة للالتزام المتفق عليه.", desc: "يتم مشاركة التفاصيل العملية حسب الحاجة للمهمة المؤكدة." },
    ],
  };

  const t = steps[locale];

  return (
    <>
      <SeoJsonLd data={schema} />
      <PageHeader
        locale={locale}
        eyebrow={locale === 'fr' ? 'COMMENT ÇA FONCTIONNE' : locale === 'ar' ? 'كيف يعمل' : 'HOW IT WORKS'}
        title={locale === 'fr' ? 'Processus des services privés' : locale === 'ar' ? 'عملية الخدمات الخاصة' : 'Private Services Process'}
        intro={locale === 'fr' ? "Chaque mission commence par comprendre vos besoins. L'envoi d'une demande ne garantit pas la disponibilité ni ne constitue une réservation confirmée." : locale === 'ar' ? 'كل مهمة تبدأ بفهم احتياجاتك. إرسال الطلب لا يضمن التوفر ولا يشكل حجزًا مؤكدًا.' : 'Every assignment begins with understanding your needs. Submitting a request does not guarantee availability or constitute a confirmed booking.'}
        breadcrumbs={[
          { name: locale === 'fr' ? 'Services Privés' : locale === 'ar' ? 'خدمات خاصة' : 'Private Services', path: '/private-services' },
          { name: locale === 'fr' ? 'Comment ça fonctionne' : locale === 'ar' ? 'كيف يعمل' : 'How it works' },
        ]}
      >
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
          <Link href={localePath(locale, '/private-services/request')} className="btn btn-gold">
            {locale === 'fr' ? 'Faire une demande' : locale === 'ar' ? 'إجراء طلب' : 'Make an enquiry'}
            <Arrow width={15} height={15} />
          </Link>
          <Link href={localePath(locale, '/private-services')} className="btn btn-outline">
            {locale === 'fr' ? 'Retour aux services' : locale === 'ar' ? 'العودة للخدمات' : 'Back to services'}
            <Arrow width={15} height={15} />
          </Link>
        </div>
      </PageHeader>

      <section className="section">
        <div className="container-luxe max-w-4xl">
          <div className="space-y-4">
            {t.map((step, index) => (
              <Reveal key={step.num} delay={index * 60}>
                <article className="panel flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent-soft">
                    {step.num}
                  </div>
                  <div>
                    <h2 className="font-display text-xl text-bone sm:text-2xl">{step.title}</h2>
                    <p className="mt-2 text-base leading-relaxed text-stone-muted">{step.desc}</p>
                  </div>
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
                <h2 className="font-display text-3xl text-bone sm:text-4xl">{locale === 'fr' ? 'Prêt à discuter ?' : locale === 'ar' ? 'مستعد للمناقشة؟' : 'Ready to discuss?'}</h2>
                <p className="mt-4 text-base leading-relaxed text-stone-muted">{locale === 'fr' ? 'Soumettez votre demande et nous vous répondrons concernant la disponibilité et la pertinence.' : locale === 'ar' ? 'أرسل استفسارك وسنرد عليك بخصوص التوفر والملاءمة.' : 'Submit your enquiry and we’ll respond regarding availability and suitability.'}</p>
                <div className="mt-8 flex justify-center">
                  <Link href={localePath(locale, '/private-services/request')} className="btn btn-gold">
                    {locale === 'fr' ? 'Faire une demande' : locale === 'ar' ? 'إجراء طلب' : 'Make an enquiry'}
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
