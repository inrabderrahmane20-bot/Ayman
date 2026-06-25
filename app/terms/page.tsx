import type { Metadata } from 'next';
import { coach } from '../../lib/content';
import { PageHeader } from '../../components/ui';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms governing coaching services provided by Ayman Coaching.',
};

const sections = [
  {
    h: 'Coaching services',
    p: 'Coaching plans provide personalized training and nutrition guidance for educational and informational purposes. Results depend on your individual effort, consistency and adherence.',
  },
  {
    h: 'Health disclaimer',
    p: 'Always consult a qualified physician before starting any new exercise or nutrition program, especially if you have a pre-existing medical condition or injury. You participate at your own risk.',
  },
  {
    h: 'Payments & cancellation',
    p: 'Plans are billed monthly with no long-term lock-in. You may cancel future billing at any time. Coaching fees already paid for the current period are non-refundable.',
  },
  {
    h: 'Conduct',
    p: 'We reserve the right to decline or end a coaching relationship where there is abusive conduct or repeated non-engagement.',
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" intro="Last updated June 2025." />
      <section className="section">
        <div className="container-luxe max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="display text-2xl text-bone">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.p}</p>
            </div>
          ))}
          <p className="leading-relaxed text-muted">
            Questions? Email{' '}
            <a href={`mailto:${coach.email}`} className="text-gold">
              {coach.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
