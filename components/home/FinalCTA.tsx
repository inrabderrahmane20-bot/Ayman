import Link from 'next/link';
import Reveal from '../Reveal';
import { Arrow } from '../Icons';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(70% 80% at 50% 0%, rgba(212,175,55,0.14) 0%, transparent 60%), #08080a',
        }}
      />
      <div className="absolute inset-0 -z-10 grid-overlay opacity-50" />

      <div className="container-luxe py-24 text-center sm:py-32">
        <Reveal>
          <span className="eyebrow centered">The Decision</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mx-auto mt-6 max-w-4xl text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.5rem]">
            One year from now you'll wish you{' '}
            <span className="gold-gradient italic">started today.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg">
            The only thing standing between you and the body you want is a decision. Make it now —
            spots are limited each month.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/apply" className="btn btn-gold">
              Apply For Coaching
              <Arrow width={16} height={16} />
            </Link>
            <Link href="/pricing" className="btn btn-outline">
              View Pricing
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
