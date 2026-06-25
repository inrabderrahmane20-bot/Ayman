import type { Metadata } from 'next';
import ApplicationForm from '../../components/ApplicationForm';
import Reveal from '../../components/Reveal';
import { Check } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'Apply for Coaching',
  description:
    'Apply for elite online coaching with Coach Mohamed Ayman Yakhmim. Take the 60-second assessment and claim your spot.',
};

const reassurance = [
  '60 seconds. No payment required to apply.',
  'Personally reviewed by Coach Ayman.',
  'Reply within 24–48 hours.',
];

export default function ApplyPage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-50" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[44rem] -translate-x-1/2 glow-gold" />

      <div className="container-luxe relative z-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow centered">Apply for Coaching</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display mt-6 text-[2.4rem] leading-[1.04] sm:text-5xl lg:text-6xl">
              Let's build your <span className="gold-gradient italic">transformation.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-base text-muted sm:text-lg">
              Answer a few quick questions so I can understand your goals. I only take on clients I
              know I can get results for — this is how we find out if we're a fit.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {reassurance.map((r) => (
                <li key={r} className="flex items-center gap-2 text-sm text-muted">
                  <Check width={15} height={15} className="text-gold" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ApplicationForm />
        </Reveal>
      </div>
    </section>
  );
}
