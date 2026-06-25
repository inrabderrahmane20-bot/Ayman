import Link from 'next/link';
import { steps } from '../../lib/content';
import { SectionHeading } from '../ui';
import { Stagger, StaggerItem } from '../Reveal';
import { Arrow } from '../Icons';

export default function HowItWorks() {
  return (
    <section className="relative border-y border-white/10 bg-ink-900">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="container-luxe relative z-10 section">
        <SectionHeading
          align="center"
          eyebrow="The Process"
          title={
            <>
              Five steps from <span className="gold-gradient italic">stuck</span> to transformed.
            </>
          }
          intro="A proven, repeatable system — no guesswork, no fads. Just structure, accountability and results."
        />

        <Stagger className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/40 via-white/10 to-transparent md:left-1/2" />

          <div className="space-y-6 md:space-y-2">
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <StaggerItem key={s.n}>
                  <div
                    className={`relative flex items-start gap-6 md:w-1/2 ${
                      right ? 'md:ml-auto md:flex-row-reverse md:text-right' : ''
                    }`}
                  >
                    <span className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-full border border-gold/40 bg-ink font-display text-lg text-gold">
                      {s.n}
                    </span>
                    <div className={`card card-hover flex-1 p-6 ${right ? 'md:mr-6' : 'md:ml-6'}`}>
                      <h3 className="font-display text-xl text-bone">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </Stagger>

        <div className="mt-14 text-center">
          <Link href="/coaching" className="btn btn-outline">
            See How Coaching Works
            <Arrow width={15} height={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
