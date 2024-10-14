const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),


  ],
  theme: {
    extend: {
      height:{
        h_full:"90vh"
      },
      backgroundImage:{
        'hero-image': "url('https://img.freepik.com/free-photo/elegant-black-girl-summer-city_1157-19015.jpg?t=st=1728889819~exp=1728893419~hmac=83e2ac2c469edde8c32b686fca879cb3c4139f8bdc11f74f9a1a47f227c6cfa9&w=740')"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

