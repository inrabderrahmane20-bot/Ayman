import type { Metadata } from 'next';
import { included, steps } from '../../lib/content';
import { PageHeader, SectionHeading } from '../../components/ui';
import Reveal, { Stagger, StaggerItem } from '../../components/Reveal';
import MacroCalculator from '../../components/MacroCalculator';
import CTABanner from '../../components/CTABanner';
import AppPreview from '../../components/home/AppPreview';
import { Check, iconMap } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'Coaching',
  description:
    'Inside the coaching experience — custom training, custom nutrition, weekly accountability and private support. Plus a free macro calculator.',
};

export default function CoachingPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Experience"
        title={
          <>
            Coaching engineered around <span className="gold-gradient italic">your life.</span>
          </>
        }
        intro="Not a template. Not an app you're left to figure out alone. A complete system with a real coach behind it."
      />

      {/* What's included — detailed */}
      <section className="section">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="What's Included"
            title={
              <>
                Four pillars. <span className="gold-gradient italic">One</span> complete system.
              </>
            }
            intro="Each pillar is built to remove a different obstacle between you and the result you want."
          />

          <Stagger className="mt-14 grid gap-6 lg:grid-cols-2">
            {included.map((card, i) => {
              const Icon = iconMap[card.icon as keyof typeof iconMap];
              return (
                <StaggerItem key={card.title}>
                  <div className="card card-hover flex h-full flex-col p-8">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                        {Icon ? <Icon width={24} height={24} /> : null}
                      </span>
                      <span className="font-display text-5xl text-white/10">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-bone">{card.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {card.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm text-muted">
                          <Check width={17} height={17} className="mt-0.5 flex-none text-gold/70" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/10 bg-ink-900">
        <div className="container-luxe section">
          <SectionHeading
            align="center"
            eyebrow="How It Works"
            title={
              <>
                Your first 90 days, <span className="gold-gradient italic">mapped.</span>
              </>
            }
          />
          <Stagger className="mt-14 grid gap-5 md:grid-cols-5">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="card h-full p-6 text-center md:text-left">
                  <span className="font-display text-4xl text-gold">{s.n}</span>
                  <h3 className="mt-3 font-display text-lg text-bone">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* App preview reused */}
      <AppPreview />

      {/* Macro calculator */}
      <section className="section">
        <div className="container-luxe">
          <SectionHeading
            align="center"
            eyebrow="Free Tool"
            title={
              <>
                Calculate your <span className="gold-gradient italic">macros</span> in seconds.
              </>
            }
            intro="A taste of the precision behind real coaching. Get a starting estimate — then let me build the plan that actually fits you."
          />
          <Reveal>
            <div className="mt-12">
              <MacroCalculator />
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Stop guessing. Start being <span className="gold-gradient italic">coached.</span>
          </>
        }
        text="Every plan is built from scratch for your body, goals and schedule."
        secondary={{ href: '/pricing', label: 'View Pricing' }}
      />
    </>
  );
}
