/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        forstRed: "#e63946",   // taken from logo (adjust if needed)
        forstYellow: "#ffbf00",// background yellow in logo
        forstTeal: "#32b3b3",
      }
    },
  },
  plugins: [],
}
