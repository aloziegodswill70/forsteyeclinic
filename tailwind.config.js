/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        strawberry: '#F23A2E',
        gold: '#F9B935',
        warmwhite: '#FFF8F2',
        dark: '#1A1A1A',
        lightgray: '#EAEAEA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
