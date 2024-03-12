/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'madimi': ['"Madimi One"', 'cursive'], 
        'radio-canada': ['"Radio Canada"', 'sans-serif'],
        'concert-one': ['"Concert One"', 'cursive'],
      },
    },
  },
  plugins: [],
}

