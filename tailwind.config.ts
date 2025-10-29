import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand primary based on #071b3a
        primary: {
          DEFAULT: '#071b3a',
          foreground: '#FFFFFF',
          50: '#e8eef7',
          100: '#cfdced',
          200: '#a9bce3',
          300: '#6a93d1',
          400: '#3c6fba',
          500: '#22509b',
          600: '#0e3a78',
          700: '#071b3a',
          800: '#05162f',
          900: '#021025',
        },
        accent: {
          DEFAULT: 'var(--color-accent, #F39C12)',
          foreground: 'var(--color-accent-foreground, #0B0B0B)'
        }
      }
    },
  },
  plugins: [typography],
}
export default config
