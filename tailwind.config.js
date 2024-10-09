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
      },
      backgroundImage:{
        'hero-image': "url('https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?t=st=1728453474~exp=1728457074~hmac=ec06340f30358a229d51a86042ab3f8cab3070b21c48d9cb0975a9ef3c86b861&w=1340')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

