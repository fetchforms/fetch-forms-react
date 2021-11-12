module.exports = {
  purge: ['./src/examples/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#8b15b8'
      }
    }
  },
  variants: {
    extend: {}
  }
};
