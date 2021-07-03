
const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        coolgray: colors.coolGray,
        blue: colors.blue,
        red: colors.rose,
        pink: colors.fuchsia,
        green: colors.green,
        },
        fontSize: {
          'xs': '.75rem',
          'sm': '.875rem',
           'base': '1rem',
           'lg': '1.125rem',
           'xl': '1.25rem',
           '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
           '5xl': '3rem',
           '6xl': '4rem',
          '7xl': '5rem',
         }
    },

    screens: {
      'xxs' : '280px',
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    letterSpacing: {
      extra: '0.8em'
    },
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif']
    },
    height: {
       'sm': '8px',
       'md': '16px',
       'lg': '24px',
       'xl': '48px',
       '2xl' : '26rem'
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
