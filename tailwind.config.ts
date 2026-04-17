import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './messages/**/*.json',
  ],
  theme: {
    extend: {
      colors: {
        canvas:   '#FAFAF7',
        dark:     '#0F0F0E',
        ink:      '#1A1A19',
        muted:    '#5C5C58',
        border:   '#E8E6DF',
        highlight:'#F3F1EA',
        accent:   '#2D5F5D',
        'accent-light': '#3D7F7C',
      },
      fontFamily: {
        arabic: ['var(--font-arabic)', 'Tajawal', 'sans-serif'],
        sans:   ['var(--font-sans)',   'system-ui', 'sans-serif'],
        mono:   ['var(--font-mono)',   'monospace'],
      },
      fontSize: {
        'hero-ar': ['clamp(3rem,8vw,6rem)', { lineHeight: '1.1', fontWeight: '600' }],
        'hero-en': ['clamp(2.5rem,6vw,5rem)', { lineHeight: '1.1', fontWeight: '500' }],
        'h1':      ['clamp(2rem,4vw,3.5rem)',  { lineHeight: '1.15' }],
        'h2':      ['clamp(1.5rem,3vw,2.5rem)',{ lineHeight: '1.2' }],
        'h3':      ['1.5rem',                  { lineHeight: '1.3' }],
        'body-ar': ['1.125rem',                { lineHeight: '1.75' }],
        'body-en': ['1rem',                    { lineHeight: '1.6' }],
        'small':   ['0.875rem',                { lineHeight: '1.5' }],
        'micro':   ['0.75rem',                 { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      spacing: {
        section: '10rem',
        'section-sm': '6rem',
      },
      maxWidth: {
        content: '1280px',
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '4px',
      },
      boxShadow: {
        none: 'none',
      },
    },
  },
  plugins: [],
}

export default config
