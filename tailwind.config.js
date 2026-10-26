/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#08080A',
          900: '#0B0B0E',
          800: '#101013',
          700: '#16161A',
          600: '#1D1D22',
          500: '#26262C',
        },
        gold: {
          DEFAULT: '#E11D2A',
          soft: '#FF6B73',
          deep: '#9B1C24',
          dim: '#7A151B',
        },
        accent: {
          DEFAULT: '#E11D2A',
          soft: '#FF6B73',
          deep: '#9B1C24',
        },
        bone: '#F5F3EF',
        stone: {
          muted: '#C2BCB3',
          dim: '#9A948B',
        },
      },
      fontFamily: {
        display: ['var(--font-bodoni)', 'Bodoni Moda', 'Didot', 'Georgia', 'serif'],
        sans: ['var(--font-jost)', 'Jost', 'Segoe UI', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'Noto Kufi Arabic', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
        '8xl': '88rem',
      },
      letterSpacing: {
        luxe: '0.24em',
        wide2: '0.16em',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'pulse-dot': {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.72)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 1.8s ease-in-out infinite',
        marquee: 'marquee 34s linear infinite',
      },
    },
  },
  plugins: [],
};
