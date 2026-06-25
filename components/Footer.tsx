import Link from 'next/link';
import { coach, navLinks } from '../lib/content';
import { Instagram, TikTok, YouTube, Mail, Phone, Arrow } from './Icons';

const socials = [
  { href: coach.socials.instagram, label: 'Instagram', Icon: Instagram },
  { href: coach.socials.tiktok, label: 'TikTok', Icon: TikTok },
  { href: coach.socials.youtube, label: 'YouTube', Icon: YouTube },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-900">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 glow-gold opacity-40" />

      <div className="container-luxe relative z-10 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 font-display text-lg text-gold">
                A
              </span>
              <div className="leading-none">
                <p className="font-display text-lg tracking-wide text-bone">AYMAN</p>
                <p className="font-sans text-[0.55rem] uppercase tracking-[0.34em] text-gold/80">
                  Coaching
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              Elite online transformation coaching. Personalized training, nutrition and
              accountability built around your life.
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bone/70 transition-all duration-300 hover:border-gold/50 hover:text-gold"
                >
                  <Icon width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-dim">Explore</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Programs */}
          <div>
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-dim">Coaching</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/pricing" className="text-sm text-muted transition-colors hover:text-gold">
                  Nutrition Only
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted transition-colors hover:text-gold">
                  Training + Nutrition
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted transition-colors hover:text-gold">
                  VIP Transformation
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-sm text-muted transition-colors hover:text-gold">
                  Apply for Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-dim">Contact</p>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`mailto:${coach.email}`}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-gold"
                >
                  <Mail width={17} height={17} className="text-gold/70" />
                  {coach.email}
                </a>
              </li>
              <li>
                <a
                  href={coach.phoneHref}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-gold"
                >
                  <Phone width={17} height={17} className="text-gold/70" />
                  {coach.phone}
                </a>
              </li>
            </ul>
            <Link href="/apply" className="btn btn-outline mt-7 !px-5 !py-3 text-[0.7rem]">
              Start Today
              <Arrow width={15} height={15} />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-dim sm:flex-row">
          <p>
            © {year} {coach.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-muted">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-muted">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
