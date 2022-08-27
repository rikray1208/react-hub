/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'myBlack': '#0E0805',
        'mySecondary' : '#E7C89D',
        'myGrey' : '#FBF8F7',
        'myHoverGrey': '#F4F1F0',
        'myOrange': '#CA512E'
      },
    },
  },
  plugins: [],
}