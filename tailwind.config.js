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
        primary: {
          gray: '#EDEDED',
          DEFAULT: '#4299e1',
          dark: '#3182ce',
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
        // Add more colors as needed
      },
    },
  },
  plugins: [],
}
