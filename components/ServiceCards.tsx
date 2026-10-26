import Link from 'next/link';
import type { Locale } from '../lib/content/types';
import { services } from '../lib/content/services';
import { localePath } from '../lib/routes';
import { Arrow, iconMap } from './Icons';

export default function ServiceCards({ locale }: { locale: Locale }) {
  const explore =
    locale === 'fr' ? 'Découvrir' : locale === 'ar' ? 'استكشف' : 'Explore service';

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {services.map((service) => {
        const Icon = iconMap[service.icon];
        return (
          <article key={service.slug} className="card card-hover relative p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-accent-soft">
                <Icon width={20} height={20} aria-hidden="true" />
              </span>
              <span className="text-[0.62rem] uppercase tracking-[0.18em] text-dim">
                {service.eyebrow[locale]}
              </span>
            </div>
            <h3 className="mt-5 font-display text-2xl text-bone">
              <Link
                href={localePath(locale, `/coaching/${service.slug}`)}
                className="after:absolute after:inset-0 after:content-['']"
              >
                {service.name[locale]}
              </Link>
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-muted">
              {service.summary[locale]}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-accent-soft">
              {explore}
              <Arrow width={14} height={14} />
            </p>
          </article>
        );
      })}
    </div>
  );
}
