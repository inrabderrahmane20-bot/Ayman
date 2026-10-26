import type { Locale } from '../lib/content/types';
import { localePath } from '../lib/routes';
import { Arrow } from './Icons';
import Reveal from './Reveal';
import TrackedNextLink from './TrackedNextLink';

export default function CtaSection({
  locale,
  eyebrow,
  title,
  body,
  primaryLabel,
  primaryPath = '/apply',
  secondaryLabel,
  secondaryPath,
  location,
}: {
  locale: Locale;
  eyebrow?: string;
  title: string;
  body: string;
  primaryLabel: string;
  primaryPath?: string;
  secondaryLabel?: string;
  secondaryPath?: string;
  location: string;
}) {
  return (
    <section className="section relative overflow-hidden border-t border-white/10">
      <div
        className="pointer-events-none absolute inset-0 grid-overlay opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[56rem] -translate-x-1/2 glow-gold opacity-70"
        aria-hidden="true"
      />
      <div className="container-luxe relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <Reveal>
              <span className="eyebrow centered">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal delay={70}>
            <h2 className="display mt-5 text-[2rem] leading-[1.05] text-bone sm:text-[2.7rem] lg:text-[3.2rem]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="lede mx-auto mt-5 max-w-2xl">{body}</p>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <TrackedNextLink
                href={localePath(locale, primaryPath)}
                event="cta_click"
                location={location}
                label="primary"
                className="btn btn-gold"
              >
                {primaryLabel}
                <Arrow width={16} height={16} />
              </TrackedNextLink>
              {secondaryLabel && secondaryPath && (
                <TrackedNextLink
                  href={localePath(locale, secondaryPath)}
                  event="cta_click"
                  location={location}
                  label="secondary"
                  className="btn btn-outline"
                >
                  {secondaryLabel}
                </TrackedNextLink>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
