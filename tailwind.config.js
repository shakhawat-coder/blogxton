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
        grey:'#D9D9D9'
    },
    boxShadow: {
      custom_shadow: '0px 0px 30px 0px rgba(23, 23, 23, 0.06)',
    }
    },
  },
  plugins: [],
}

