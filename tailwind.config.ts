import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        ivory: '#F4EFE6',
        gold: '#C9A961',
        'gold-hover': '#D9BC73',
        'text-on-dark': '#EDE7D9',
        'text-on-light': '#1A1A1A',
        'hairline-dark': '#2A2A2A',
        'hairline-light': '#D9D2C2',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '300' }],
        'display-md': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '300' }],
        'headline-xl': ['3rem', { lineHeight: '1.15', fontWeight: '300' }],
        'headline-lg': ['2rem', { lineHeight: '1.25', fontWeight: '300' }],
        'headline-md': ['1.5rem', { lineHeight: '1.35', fontWeight: '400' }],
        'label-sm': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.2em', fontWeight: '500' }],
      },
      spacing: {
        'section': '10rem',
        'section-sm': '6rem',
        'gutter': '2rem',
        'gutter-lg': '5rem',
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '4px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'reveal': 'cubic-bezier(0.32, 0, 0.165, 1)',
        'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1200': '1200ms',
      },
      animation: {
        'count-up': 'countUp 1.5s ease-out forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'dot-descent': 'dotDescent 2s ease-in-out infinite',
        'line-draw': 'lineDraw 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        dotDescent: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(32px)', opacity: '0' },
        },
        lineDraw: {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
