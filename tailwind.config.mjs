const channel = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: channel('bg'),
        surface: channel('surface'),
        'surface-2': channel('surface-2'),
        text: channel('text'),
        muted: channel('muted'),
        border: channel('border'),
        slate: channel('slate'),
        brass: channel('brass'),
        'on-brass': channel('on-brass'),
      },
      fontFamily: {
        sans: [
          '"Atkinson Hyperlegible Next Variable"',
          '"Atkinson Hyperlegible Next"',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
