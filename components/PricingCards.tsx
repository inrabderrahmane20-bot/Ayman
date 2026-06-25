import Link from 'next/link';
import { plans } from '../lib/content';
import { Check, Arrow } from './Icons';
import { StaggerItem } from './Reveal';

export default function PricingCards() {
  // Order so the featured VIP plan sits in the middle on desktop.
  const ordered = [plans[0], plans[1], plans[2]];

  return (
    <div className="grid items-center gap-6 lg:grid-cols-3">
      {ordered.map((plan) => {
        const featured = plan.featured;
        return (
          <StaggerItem key={plan.id}>
            <div
              className={`relative flex h-full flex-col rounded-lg border p-7 transition-all duration-500 sm:p-8 ${
                featured
                  ? 'border-gold/40 bg-gradient-to-b from-gold/[0.07] to-transparent shadow-[0_30px_80px_-40px_rgba(225,29,42,0.5)] lg:scale-[1.04]'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              {featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-soft to-gold-deep px-4 py-1 font-sans text-[0.6rem] uppercase tracking-[0.2em] text-white">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="font-display text-2xl text-bone">{plan.name}</h3>
                <p className="mt-2 min-h-[2.5rem] text-sm leading-relaxed text-muted">
                  {plan.tagline}
                </p>
              </div>

              <div className="mt-6 flex items-end gap-1">
                <span className={`font-display text-5xl ${featured ? 'text-gold' : 'text-bone'}`}>
                  {plan.price}
                </span>
                <span className="mb-2 text-sm text-dim">{plan.period}</span>
              </div>

              <div className="my-7 hairline" />

              <ul className="flex-1 space-y-3.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted">
                    <Check
                      width={18}
                      height={18}
                      className={`mt-0.5 flex-none ${featured ? 'text-gold' : 'text-gold/70'}`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/apply"
                className={`btn mt-8 w-full ${featured ? 'btn-gold' : 'btn-outline'}`}
              >
                {plan.cta}
                <Arrow width={15} height={15} />
              </Link>
            </div>
          </StaggerItem>
        );
      })}
    </div>
  );
}
