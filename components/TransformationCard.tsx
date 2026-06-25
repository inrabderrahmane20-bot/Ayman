import type { Transformation } from '../lib/content';
import BeforeAfter from './BeforeAfter';

export default function TransformationCard({
  item,
  index = 0,
}: {
  item: Transformation;
  index?: number;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-gold/30">
      <BeforeAfter
        result={item.result}
        duration={item.duration}
        hue={(index * 37) % 60}
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl text-bone">
            {item.name}
            <span className="ml-2 text-sm text-dim">· {item.age}</span>
          </h3>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.goals.map((g) => (
            <span key={g} className="chip !py-1 !text-[0.6rem]">
              {g}
            </span>
          ))}
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">“{item.quote}”</p>
      </div>
    </article>
  );
}
