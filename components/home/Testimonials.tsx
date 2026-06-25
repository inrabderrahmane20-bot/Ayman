import { testimonials } from '../../lib/content';
import { SectionHeading, Stars } from '../ui';
import { Stagger, StaggerItem } from '../Reveal';

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container-luxe">
        <SectionHeading
          align="center"
          eyebrow="In Their Words"
          title={
            <>
              The proof is in the <span className="gold-gradient italic">people</span>.
            </>
          }
          intro="Hundreds of clients. One common thread — they stopped waiting and started."
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="card card-hover relative h-full p-7 sm:p-8">
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-6 top-3 font-display text-7xl leading-none text-gold/15"
                >
                  &rdquo;
                </span>
                <Stars count={t.rating} />
                <blockquote className="mt-5 text-[1.05rem] leading-relaxed text-bone/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/5 font-display text-gold">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-medium text-bone">{t.name}</p>
                    <p className="text-xs text-dim">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        {/* trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-dim">
          {['NASM Certified', 'Exercise Science', '220+ Clients', '9 Countries', '5★ Rated'].map(
            (b) => (
              <span
                key={b}
                className="font-display text-lg tracking-wide text-white/30 transition-colors hover:text-gold/60"
              >
                {b}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
