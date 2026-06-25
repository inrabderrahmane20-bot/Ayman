import { stats } from '../../lib/content';
import AnimatedCounter from '../AnimatedCounter';
import { Stagger, StaggerItem } from '../Reveal';

export default function SocialProof() {
  return (
    <section className="relative border-y border-white/10 bg-ink-900">
      <div className="container-luxe py-14 sm:py-16">
        <Stagger className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <p className="font-display text-4xl text-bone sm:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
