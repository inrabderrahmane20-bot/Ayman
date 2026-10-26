import type { CSSProperties, ReactNode } from 'react';

type RevealTag = 'div' | 'li' | 'article';

export default function Reveal({
  children,
  delay = 0,
  className = '',
  slow = false,
  as: Tag = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  slow?: boolean;
  /** Render as a semantic element so reveal wrappers never break list markup. */
  as?: RevealTag;
}) {
  return (
    <Tag
      className={`${slow ? 'reveal-slow' : 'reveal'} ${className}`.trim()}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
