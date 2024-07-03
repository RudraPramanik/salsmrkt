/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-bottom': '0px 0px 7px 2px rgba(0,0,0,0.1)',
      },
      colors: {
        custom:{
          'black': '#000000',
          'orange': '#FFAC3C',
          'red': '#FF0000',
          'blue': '#0000FF',
          'green': '#00FF00',
        },
        primary: {
          gray: '#EDEDED',
          DEFAULT: '#4299e1',
          blue: '#3A4980',
          black:'#1D364D'
        },
        secondary: {
          light: '#fbb6ce',
          DEFAULT: '#f687b3',
          dark: '#e53e3e',
        },
        chocolate:{
          dark:'#875541',
          light:'#F5F1EE'
        }
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2240px',
        '5xl': '2560px',
      },
    },
  },
  plugins: [],
}
