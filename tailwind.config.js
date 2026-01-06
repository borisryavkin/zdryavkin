/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': {
          100: '#e6f2e6',
          200: '#c9e6c9',
          300: '#acdaac',
          400: '#8fcd8f',
          500: '#72c172',
          600: '#5baa5b',
          700: '#459045',
          800: '#2e752e',
          900: '#175a17',
        },
        'brand-yellow': {
          100: '#fff9e6',
          200: '#fff2cc',
          300: '#ffecb3',
          400: '#ffe599',
          500: '#ffdf80',
          600: '#ffd966',
          700: '#ffd24d',
          800: '#ffcc33',
          900: '#ffc61a',
        }
      },
      fontFamily: {
        'serif': ['Garamond', 'Cambria', 'serif'],
        'handwritten': ['Dancing Script', 'cursive']
      },
    },
  },
  plugins: [],
} 