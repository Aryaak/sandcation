
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
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
