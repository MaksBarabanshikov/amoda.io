/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,vue,jsx}'],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      blue: '#2653F2',
      dblue: '#1859FE',
      gray: '#F9F9F9',
    },
    borderRadius: {
      none: '0',
      10: '10px',
    },
    extend: {},
  },
  plugins: [],
};
