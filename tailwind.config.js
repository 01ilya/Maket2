/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,}"],
  theme: {
    extend: {
      screens: {

        'md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }

        'sd': { 'min': '1000px' },


      },
      dropShadow: {
        '3xl': '4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'primary': '#185CFF',
        'secondary': '#002B4E',
        'tertiary': '#F0F9FF',
        'helper-blue-1': '#194060',
        'helper-blue-2': '#607D94',
        'helper-blue-3': '#C9DCEC',
        'black': '#292D33',
        'grey': '#9497A1',
        'background': '#F1F6FA',
        'error': '#C14040',

      },
    },
  },
  plugins: [],
}