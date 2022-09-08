/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'white',
          main: '#28282a',
          dark: '#1e1e1f',
        },
        secondary: {
          light: '#9CC0F9',
          main: '#025E91',
          dark: '#e62958',
        },
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      plugins: [require('daisyui')],
    },
  },
};
