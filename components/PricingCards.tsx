'use client';

import Link from 'next/link';
import type { Locale } from '../lib/content/types';
import { plans } from '../lib/content/home';
import { ui } from '../lib/content/common';
import { localePath } from '../lib/routes';
import { track } from '../lib/analytics';
import { Arrow, Check, X } from './Icons';

export default function PricingCards({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  const featuredLabel =
    locale === 'fr' ? 'Accès rapproché' : locale === 'ar' ? 'وصول أقرب' : 'Closer access';
  const excludesLabel =
    locale === 'fr' ? 'Non inclus' : locale === 'ar' ? 'غير مشمول' : 'Not included';

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {plans.map((plan) => (
        <article
          key={plan.id}
          id={plan.id}
          className={`plan ${plan.featured ? 'plan-featured' : ''}`.trim()}
          aria-labelledby={`plan-${plan.id}-name`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                id={`plan-${plan.id}-name`}
                className="font-display text-2xl text-bone sm:text-[1.7rem]"
              >
                {plan.name[locale]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-muted">{plan.tagline[locale]}</p>
            </div>
            {plan.featured && <span className="badge shrink-0">{featuredLabel}</span>}
          </div>

          <div className="mt-7 flex items-end gap-2">
            <span className="tnum font-display text-5xl leading-none text-bone">${plan.price}</span>
            <span className="pb-1 text-sm text-dim">
              {ui.usd[locale]} · {plan.cadence[locale]}
            </span>
          </div>

          <ul className="mt-7 flex-1 space-y-3">
            {plan.includes[locale].slice(0, compact ? 4 : 8).map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-muted">
                <Check width={16} height={16} className="mt-0.5 shrink-0 text-accent-soft" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {!compact && (
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-dim">{excludesLabel}</p>
              <ul className="mt-3 space-y-2">
                {plan.excludes[locale].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-dim">
                    <X width={13} height={13} className="mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link
            href={`${localePath(locale, '/apply')}?plan=${plan.id}`}
            onClick={() => track('plan_select', { plan: plan.id, price: plan.price, currency: 'USD' })}
            className={`btn mt-7 w-full ${plan.featured ? 'btn-gold' : 'btn-outline'}`}
          >
            {plan.cta[locale]}
            <Arrow width={15} height={15} />
          </Link>
        </article>
      ))}
    </div>
  );
}
