module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      rotate:{
        "-25":"-25deg"

      },
      margin:{
        "26":"6.5rem"
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
