type Item = { q: string; a: string };

export default function Accordion({ items }: { items: Item[] }) {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, index) => (
        <details key={item.q} className="group" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left">
            <span className="font-display text-lg text-bone transition-colors duration-300 group-open:text-gold sm:text-xl">
              {item.q}
            </span>
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-white/15 text-muted transition-all duration-500 group-open:rotate-45 group-open:border-gold group-open:text-gold">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <div className="max-w-2xl pb-7 text-[0.95rem] leading-relaxed text-muted">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
