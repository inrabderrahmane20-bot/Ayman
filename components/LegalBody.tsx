import type { Locale } from '../lib/content/types';
import type { LegalSection } from '../lib/content/legal';
import { ui } from '../lib/content/common';
import { legalUpdated } from '../lib/content/legal';

export default function LegalBody({
  locale,
  sections,
}: {
  locale: Locale;
  sections: LegalSection[];
}) {
  return (
    <section className="section">
      <div className="container-luxe grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-dim">
            {ui.effectiveDate[locale]}
          </p>
          <p className="mt-2 text-sm text-stone-muted">
            <time dateTime={legalUpdated}>{legalUpdated}</time>
          </p>
          <nav aria-label={ui.related[locale]} className="mt-8 hidden border-s border-white/10 ps-5 lg:block">
            <ol className="space-y-2.5">
              {sections.map((section, index) => (
                <li key={section.title[locale]}>
                  <a
                    href={`#legal-${index}`}
                    className="text-sm leading-relaxed text-stone-muted transition-colors hover:text-accent-soft"
                  >
                    {section.title[locale]}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <section
              key={section.title[locale]}
              id={`legal-${index}`}
              className="scroll-mt-28 border-t border-white/10 pt-8 first:border-t-0 first:pt-0"
              aria-labelledby={`legal-title-${index}`}
            >
              <h2
                id={`legal-title-${index}`}
                className="font-display text-[1.55rem] leading-tight text-bone sm:text-2xl"
              >
                {section.title[locale]}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body[locale].map((paragraph) => (
                  <p key={paragraph} className="text-[0.95rem] leading-relaxed text-stone-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets && section.bullets[locale].length > 0 && (
                <ul className="mt-5 space-y-2.5 border-s border-gold/30 ps-5">
                  {section.bullets[locale].map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-stone-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
