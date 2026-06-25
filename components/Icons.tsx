import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const Arrow = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Dumbbell = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6.5 6.5 17.5 17.5M3 9v6M21 9v6M5 7v10M19 7v10M2 12h2M20 12h2" />
  </svg>
);

export const Leaf = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M11 20A7 7 0 0 1 4 13c0-5 4-8 12-9 0 7-3 11-8 13Z" />
    <path d="M5 21c1.5-5 4-7 9-9" />
  </svg>
);

export const Chart = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 3v18h18" />
    <path d="M7 14l3-3 3 3 5-6" />
  </svg>
);

export const Chat = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-5A8 8 0 1 1 21 12Z" />
  </svg>
);

export const Star = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);

export const Pin = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Globe = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
  </svg>
);

export const Clock = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Shield = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Spark = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </svg>
);

export const Instagram = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export const TikTok = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M15 4c.5 2.5 2 4 4.5 4.3v3C17.8 11 16.3 10.4 15 9.4V15a5.5 5.5 0 1 1-5.5-5.5c.4 0 .8 0 1.2.1v3.1a2.5 2.5 0 1 0 1.8 2.4V4H15Z" />
  </svg>
);

export const YouTube = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
  </svg>
);

export const WhatsApp = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 21l1.6-4.4A8 8 0 1 1 12 20a8 8 0 0 1-4-1.1L3 21Z" />
    <path d="M8.5 8.5c0 4 3 7 7 7 .8 0 1.3-.7 1-1.4l-.4-.9a.8.8 0 0 0-1-.4l-.9.4a5 5 0 0 1-2.6-2.6l.4-.9a.8.8 0 0 0-.4-1l-.9-.4c-.7-.3-1.4.2-1.4 1Z" strokeWidth="1.2" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const iconMap = {
  dumbbell: Dumbbell,
  leaf: Leaf,
  chart: Chart,
  chat: Chat,
} as const;
