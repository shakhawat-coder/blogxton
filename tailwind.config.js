/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily:{
        inter: "'Inter', sans-serif",
        prompt: "'Prompt', sans-serif"
      },
      maxWidth: {
        'container':"1170px",
        'container_fluid':"1920px",
      },
      colors: {
        deepblack:'#171717',
    },
    },
  },
  plugins: [],
}

