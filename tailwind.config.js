/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'myBlack': '#0E0805',
        'mySecondary' : '#E7C89D',
        'myGrey' : '#FBF8F7',
        'lightGrey': '#626262',
        'myHoverGrey': '#F4F1F0',
        'myOrange': '#CA512E',
        'mySideText': '#0E0805'
      },
      boxShadow: {
        'cardShadow': '0 8px 20px rgba(0, 0, 0, 0.25)',
        'btnShadow': '6px 8px 12px rgba(0, 0, 0, 0.35)',
        'Container': '0px 15px 20px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}