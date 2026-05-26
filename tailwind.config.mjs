/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Midnight Neon (default / dark)
        bg:           'var(--c-bg)',
        surface:      'var(--c-surface)',
        'surface-2':  'var(--c-surface-2)',
        text:         'var(--c-text)',
        muted:        'var(--c-muted)',
        primary:      'var(--c-primary)',
        'primary-deep': 'var(--c-primary-deep)',
        accent:       'var(--c-accent)',
        'accent-deep':'var(--c-accent-deep)',
        cream:        'var(--c-cream)',
        ink:          'var(--c-ink)',
        border:       'var(--c-border)',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0,255,102,0.25), 0 8px 32px -8px rgba(0,255,102,0.45)',
      },
    },
  },
  plugins: [],
};
