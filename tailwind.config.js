/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        raleway:["'Raleway'", "system-ui"]

      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
