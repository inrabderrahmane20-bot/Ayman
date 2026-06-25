/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
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
          DEFAULT: '#D4AF37',
          soft: '#E6CC7F',
          deep: '#A9842B',
          dim: '#8A6D24',
        },
        bone: '#F5F3EF',
        stone: {
          muted: '#A8A29A',
          dim: '#6E6A63',
        },
      },
      fontFamily: {
        display: ['var(--font-bodoni)', 'Bodoni Moda', 'Didot', 'serif'],
        sans: ['var(--font-jost)', 'Jost', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
        '8xl': '88rem',
      },
      letterSpacing: {
        luxe: '0.28em',
        wide2: '0.18em',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'pulse-dot': {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.7)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 1.8s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        marquee: 'marquee 32s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
