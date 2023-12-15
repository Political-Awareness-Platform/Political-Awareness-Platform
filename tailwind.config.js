/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    './public/index.html'
  ],
  theme: {
    extend: {},
    fontFamily: {
      Quicksand: ['Quicksand', 'sans-serif'],
      Inter: ['Inter', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
}