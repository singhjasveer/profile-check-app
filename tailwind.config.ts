import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--brand-primary)',
        accent: 'var(--brand-accent)',
        cream: 'var(--brand-cream)',
        ink: 'var(--brand-ink)',
        muted: 'var(--brand-muted)',
      },
      fontFamily: {
        display: [
          'var(--font-display)',
          'serif',
        ],
        sans: [
          'var(--font-sans)',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config