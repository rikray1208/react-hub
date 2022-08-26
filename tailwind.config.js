/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx, tsx, scss}"],
  theme: {
    extend: {
      boxShadow: {
        'Container': '0 15px 20px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
