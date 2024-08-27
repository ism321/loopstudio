module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontfamily: {
        sans: ['josefin sans','sans-serif'],
       
      },
      letterspacing: {
        widest:'.3em',
      }
    },
  },
  plugins: [],
}
