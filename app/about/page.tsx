import type { Metadata } from 'next';
import Image from 'next/image';
import { coach, stats } from '../../lib/content';
import heroImg from '../../public/hero.jpg';
import { PageHeader } from '../../components/ui';
import Reveal, { Stagger, StaggerItem } from '../../components/Reveal';
import CTABanner from '../../components/CTABanner';
import { Shield, Globe, Check } from '../../components/Icons';
import AnimatedCounter from '../../components/AnimatedCounter';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Coach Mohamed Ayman Yakhmim — Exercise Science-trained online coach with 220+ client transformations across nutrition, training and accountability.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Coach"
        title={
          <>
            Built on science. <span className="gold-gradient italic">Driven</span> by people.
          </>
        }
        intro="The story, the credentials and the philosophy behind every transformation."
      />

      {/* Intro split */}
      <section className="section">
        <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-5 -z-10 glow-gold opacity-60" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={heroImg}
                  alt={`${coach.name}, ${coach.title}`}
                  fill
                  priority
                  placeholder="blur"
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover object-[center_18%]"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">{coach.title}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-5 text-[2.2rem] leading-[1.05] sm:text-5xl">
                {coach.name}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-muted">{coach.about}</p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-4 text-base leading-relaxed text-muted">{coach.experience}</p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                {coach.languages.map((l) => (
                  <span key={l} className="chip">
                    <Globe width={14} height={14} className="text-gold" />
                    {l}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-white/10 bg-ink-900">
        <div className="container-luxe py-14">
          <Stagger className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <p className="font-display text-4xl text-gold sm:text-5xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                  {s.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container-luxe grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="card p-8">
              <span className="eyebrow">Coaching Philosophy</span>
              <h3 className="display mt-5 text-3xl text-bone">
                A client-centric approach to lasting change.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted">
                {coach.nutritionPhilosophy}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-8">
              <span className="eyebrow">Credentials</span>
              <div className="mt-6 space-y-4">
                {coach.certifications.map((c) => (
                  <div key={c.title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                      <Shield width={20} height={20} />
                    </span>
                    <div>
                      <p className="font-medium text-bone">{c.title}</p>
                      <p className="text-sm text-dim">{c.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-white/10 bg-ink-900">
        <div className="container-luxe section">
          <div className="text-center">
            <Reveal>
              <span className="eyebrow centered">Areas of Expertise</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mx-auto mt-5 max-w-2xl text-[2rem] leading-[1.1] sm:text-4xl">
                Eight disciplines. One outcome — <span className="gold-gradient italic">your</span>{' '}
                transformation.
              </h2>
            </Reveal>
          </div>

          <Stagger className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {coach.skills.map((s) => (
              <StaggerItem key={s}>
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors hover:border-gold/30">
                  <Check width={18} height={18} className="flex-none text-gold" />
                  <span className="text-bone">{s}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Ready to work with a coach who actually{' '}
            <span className="gold-gradient italic">listens?</span>
          </>
        }
        text="Limited spots open each month. Apply today and let's map out your transformation."
        secondary={{ href: '/transformations', label: 'See Results' }}
      />
    </>
  );
}
