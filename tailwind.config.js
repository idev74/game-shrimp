/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}

