/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './constants/style.js',
    './node_modules/flowbite.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ef5744',
      },
      fontFamily: {
        raleway: ['"Raleway"', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite')],
};
