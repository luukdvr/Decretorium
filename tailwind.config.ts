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
        // Brand primary - sophisticated dark gray tones
        primary: {
          DEFAULT: '#181818ff',
          foreground: '#FFFFFF',
          50: '#f9f9f9ff',
          100: '#f8f8f8ff',
          200: '#e8e8e8ff',
          300: '#dfdfdfff',
          400: '#b2b2b2ff',
          500: '#828282ff',
          600: '#6a6a6aff',
          700: '#545454ff',
          800: '#3d3d3dff',
          900: '#1c1c1cff',
        },
        // Red accent matching logo
        accent: {
          DEFAULT: '#dc2626',
          foreground: '#FFFFFF',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      }
    },
  },
  plugins: [typography],
}
export default config
