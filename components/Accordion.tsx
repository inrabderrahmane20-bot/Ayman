'use client';

import type { Faq } from '../lib/content/types';
import { track } from '../lib/analytics';

export default function Accordion({
  items,
  group,
}: {
  items: Faq[];
  group: string;
}) {
  return (
    <div className="border-t border-white/10">
      {items.map((item, index) => (
        <details
          key={`${group}-${index}`}
          className="faq-item group"
          onToggle={(event) => {
            if (event.currentTarget.open) {
              track('faq_open', { group, index });
            }
          }}
        >
          <summary>
            <span>{item.q}</span>
          </summary>
          <div className="faq-answer">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
