/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Logo plate navy (sampled from .zero mark) */
        'zero-navy': {
          DEFAULT: 'rgb(var(--pz-navy-rgb) / <alpha-value>)',
          elevated: '#0A1448',
          light: '#121C52',
        },
        /* Logo wordmark / primary type */
        ink: {
          DEFAULT: 'rgb(var(--pz-ink-rgb) / <alpha-value>)',
          muted: 'rgb(var(--pz-ink-muted-rgb) / <alpha-value>)',
          faint: 'rgb(var(--pz-ink-faint-rgb) / <alpha-value>)',
        },
        /* Premium accent blue */
        brand: {
          DEFAULT: 'rgb(var(--pz-accent-rgb) / <alpha-value>)',
          soft: '#B4C4FF',
          deep: '#6B82E8',
          muted: 'rgba(139, 163, 255, 0.14)',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'brand-glow': '0 0 24px rgb(var(--pz-accent-rgb) / 0.28)',
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
