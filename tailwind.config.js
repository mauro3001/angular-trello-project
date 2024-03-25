/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        success: colors.green,
        primary: colors.sky,
        danger: colors.red,
        gray: colors.gray,
      },
      container: {
        screens: {
          sm : '640px',
          md : '768px',
          lg : '1024px',
          xl : '1024px',
          '2xl': '1440px',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

