import type { Metadata } from 'next';
import { coach } from '../../lib/content';
import { PageHeader } from '../../components/ui';
import ContactForm from '../../components/ContactForm';
import Reveal from '../../components/Reveal';
import {
  Mail,
  Phone,
  Pin,
  Globe,
  WhatsApp,
  Instagram,
  TikTok,
  YouTube,
} from '../../components/Icons';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with Coach ${coach.name}. Email, phone, WhatsApp — or apply directly for coaching.`,
};

const details = [
  { Icon: Mail, label: 'Email', value: coach.email, href: `mailto:${coach.email}` },
  { Icon: Phone, label: 'Phone', value: coach.phone, href: coach.phoneHref },
  { Icon: WhatsApp, label: 'WhatsApp', value: 'Message directly', href: coach.whatsapp },
  { Icon: Pin, label: 'Location', value: coach.location, href: undefined },
];

const socials = [
  { Icon: Instagram, label: 'Instagram', href: coach.socials.instagram },
  { Icon: TikTok, label: 'TikTok', href: coach.socials.tiktok },
  { Icon: YouTube, label: 'YouTube', href: coach.socials.youtube },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title={
          <>
            Let's start a <span className="gold-gradient italic">conversation.</span>
          </>
        }
        intro="Questions about coaching, plans or whether this is right for you? Reach out — I read and reply to every message personally."
      />

      <section className="section">
        <div className="container-luxe grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Details */}
          <div>
            <Reveal>
              <h2 className="display text-3xl text-bone">Contact details</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-3 text-muted">
                Prefer to skip the form? Reach me on any of these — WhatsApp gets the fastest reply.
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {details.map(({ Icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-4 transition-colors duration-300 group-hover:border-gold/30">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                      <Icon width={20} height={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-dim">{label}</p>
                      <p className="text-bone">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="group">
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Languages */}
            <Reveal delay={0.1}>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.16em] text-dim">Coaching languages</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {coach.languages.map((l) => (
                    <span key={l} className="chip">
                      <Globe width={14} height={14} className="text-gold" />
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Socials */}
            <Reveal delay={0.14}>
              <div className="mt-8 flex gap-3">
                {socials.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-bone/70 transition-all duration-300 hover:border-gold/50 hover:text-gold"
                  >
                    <Icon width={19} height={19} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
