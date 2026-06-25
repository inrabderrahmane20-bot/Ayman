import Link from 'next/link';
import Reveal from './Reveal';
import { Arrow } from './Icons';

export default function CTABanner({
  title,
  text,
  primary = { href: '/apply', label: 'Apply For Coaching' },
  secondary,
}: {
  title: React.ReactNode;
  text?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden border-t border-white/10">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 80% at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 60%), #0b0b0e',
        }}
      />
      <div className="container-luxe py-20 text-center sm:py-24">
        <Reveal>
          <h2 className="display mx-auto max-w-3xl text-[2.2rem] leading-[1.05] sm:text-5xl">
            {title}
          </h2>
        </Reveal>
        {text && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted">{text}</p>
          </Reveal>
        )}
        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href={primary.href} className="btn btn-gold">
              {primary.label}
              <Arrow width={16} height={16} />
            </Link>
            {secondary && (
              <Link href={secondary.href} className="btn btn-outline">
                {secondary.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
