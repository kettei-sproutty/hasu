module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx', './src/public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
