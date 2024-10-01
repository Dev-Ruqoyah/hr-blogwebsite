/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      height:{
        h_full:"90vh"
      }
    },
  },
  plugins: [],
}

