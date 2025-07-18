const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Geist Mono', ...defaultTheme.fontFamily.mono],
      },

      lineHeight: {
        extratight: '1.15',
      },

      boxShadow: {
        'inner-blur':
          'inset -0.5px 0.5px 1px 0px rgba(203, 213, 225, 0.12), inset 0 0 96px 0 rgba(221, 214, 254, .08)',
        'inner-blur-light':
          'inset -0.5px 0.5px 1px 0px rgba(203, 213, 225, 0.01), inset 0 0 96px 0 rgba(221, 214, 254, .08)',
        'inner-blur-no-border': 'inset 0 0 96px 0 rgba(221, 214, 254, .01)',
        'btn-primary':
          'inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1), inset 0px 0px 12px 0px rgba(255, 255, 255, 0.08), inset 0px -8px 32px 0px rgba(30, 13, 73, 0.5), 0px 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 1px 3px 0px rgba(0, 0, 0, 0.4), 0px 1px 0px 0px rgba(0, 0, 0, 0.2), 0px 4px 25px 1px rgba(139, 92, 246, 0.5)',
        'btn-primary-hover':
          'inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1), inset 0px 0px 12px 0px rgba(255, 255, 255, 0.08), inset 0px -8px 32px 0px rgba(30, 13, 73, 0.5), 0px 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 1px 3px 0px rgba(0, 0, 0, 0.4), 0px 1px 0px 0px rgba(0, 0, 0, 0.2), 0px 4px 50px 3px rgba(124, 58, 237, 0.1)',
        'btn-secondary':
          'inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1), inset 0px 0px 12px 0px rgba(255, 255, 255, 0.08), inset 0px -8px 32px 0px rgba(30, 13, 73, 0.2), inset -0.5px 0.5px 1px 0px rgba(203, 213, 225, 0.12), inset 0 0 96px 0 rgba(221, 214, 254, .05), 0px 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 1px 0px 0px rgba(0, 0, 0, 0.2)',
        'btn-secondary-hover':
          'inset 0px 0px 12px 8px rgba(255, 255, 255, 0.04)',
      },

      backgroundImage: {
        'btn-primary':
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(243, 238, 255, 0.4)), linear-gradient(to bottom, rgba(139, 92, 246, 1), rgba(81, 54, 144, 1))',
        'btn-primary-hover':
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(243, 238, 255, 0.25)), linear-gradient(to bottom, rgba(139, 92, 246, 1), rgba(81, 54, 144, 1))',
      },

      margin: {
        18: '4.5rem',
      },

      spacing: {
        4.5: '1.125rem',
      },

      blur: {
        '4xl': '200px',
      },

      keyframes: {
        infiniteScroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },

      animation: {
        infiniteScroll:
          'infiniteScroll var(--_infinite-scroll-duration, 40s) linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
