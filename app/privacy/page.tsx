import type { Metadata } from 'next';
import { coach } from '../../lib/content';
import { PageHeader } from '../../components/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Ayman Coaching collects, uses and protects your personal information.',
};

const sections = [
  {
    h: 'Information we collect',
    p: 'When you apply for coaching or contact us, we collect the details you provide — such as your name, email, phone number, age and fitness goals — so we can respond and build your plan.',
  },
  {
    h: 'How we use your information',
    p: 'Your information is used solely to deliver coaching services, communicate with you, and personalize your training and nutrition plans. We never sell your data.',
  },
  {
    h: 'Data storage & security',
    p: 'We take reasonable measures to protect your personal information. Communication and plan delivery happen through secure, industry-standard channels.',
  },
  {
    h: 'Your rights',
    p: 'You may request access to, correction of, or deletion of your personal data at any time by emailing us.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" intro="Last updated June 2025." />
      <section className="section">
        <div className="container-luxe max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="display text-2xl text-bone">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.p}</p>
            </div>
          ))}
          <p className="leading-relaxed text-muted">
            Questions about this policy? Email{' '}
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
