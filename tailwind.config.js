/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        ethnocentric: ['Ethnocentric', 'sans-serif'],
        'martian-sunrise': ['Martian Sunrise', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
