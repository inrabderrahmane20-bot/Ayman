import { included } from '../../lib/content';
import { SectionHeading } from '../ui';
import { Stagger, StaggerItem } from '../Reveal';
import { Check, iconMap } from '../Icons';

export default function WhatsIncluded() {
  return (
    <section className="section">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="What's Included"
          title={
            <>
              Everything you need. <span className="gold-gradient italic">Nothing</span> you don't.
            </>
          }
          intro="A complete coaching system engineered to remove every excuse between you and the result."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
          {included.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={card.title}>
                <div className="card card-hover h-full p-7 sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                    {Icon ? <Icon width={24} height={24} /> : null}
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-bone">{card.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {card.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-muted">
                        <Check width={17} height={17} className="mt-0.5 flex-none text-gold/70" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
