import Link from 'next/link';
import Image from 'next/image';
import { coach } from '../../lib/content';
import heroImg from '../../public/hero.jpg';
import Reveal from '../Reveal';
import { Check, Arrow, Shield } from '../Icons';

export default function CoachAuthority() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink-900">
      <div className="container-luxe section grid items-center gap-14 lg:grid-cols-2">
        {/* Photo */}
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-5 -z-10 glow-gold opacity-60" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
              <Image
                src={heroImg}
                alt={`${coach.name}, ${coach.title}`}
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-[center_18%]"
              />
            </div>
            <div className="absolute -bottom-5 -right-4 rounded-lg border border-gold/30 bg-ink-800/90 px-5 py-4 backdrop-blur">
              <p className="font-display text-3xl text-gold tnum">220+</p>
              <p className="text-[0.65rem] uppercase tracking-[0.15em] text-muted">
                Clients Transformed
              </p>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <Reveal>
            <span className="eyebrow">Meet Your Coach</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-5 text-[2.2rem] leading-[1.04] sm:text-5xl">{coach.name}</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gold/80">{coach.tagline}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-base leading-relaxed text-muted">{coach.about}</p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {coach.certifications.map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-4"
                >
                  <Shield width={20} height={20} className="mt-0.5 flex-none text-gold" />
                  <div>
                    <p className="text-sm font-medium text-bone">{c.title}</p>
                    <p className="text-xs text-dim">{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {coach.skills.slice(0, 4).map((s) => (
                <span key={s} className="flex items-center gap-2 text-sm text-muted">
                  <Check width={15} height={15} className="text-gold/70" />
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.36}>
            <Link href="/about" className="btn btn-outline mt-9">
              The Full Story
              <Arrow width={15} height={15} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
