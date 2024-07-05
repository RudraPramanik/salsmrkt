
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        '40pct': '40%',
      },
      boxShadow: {
        "custom-bottom": "0px 0px 7px 2px rgba(0,0,0,0.1)",
      },
      colors: {
        polo: {
          white: "#EDEDED",
          black: "#000000",
          orange: "#FFAC3C",
          red: "#FF0000",
          blue: "#0000FF",
          green: "#00FF00",
        },
        custom: {
          black: "#344054",
          gray:"#667085",
          orange: "#FFAC3C",
          red: "#FF0000",
          blue: "#0000FF",
          green: "#00FF00",
          // chiliDark: "#D46F77",
          // chiliLight: "#FFF0F0",
        },
        primary: {
          gray: "#EDEDED",
          DEFAULT: "#4299e1",
          blue: "#3A4980",
          black: "#1D364D",
        },
        secondary: {
          red:"#D75951",
          light: "#fbb6ce",
          DEFAULT: "#f687b3",
          dark: "#e53e3e",
        },
        chocolate: {
          dark: "#875541",
          light: "#F5F1EE",
          text:"#726C6C",
          // chili: "#d46f77",
          // babyPink: "#fff0f0",
        },
        chili: {
          dark: "#D46F77",
          light: "#FFF0F0",
        },
        blue: {
          dark: "#3A4980",
          light: "#EDF0F8"
        },
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2240px",
        "5xl": "2560px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* For Firefox */
          "-ms-overflow-style": "none",
          /* For Internet Explorer and Edge */
          "scrollbar-width": "none",
          /* For Google Chrome, Safari, and Opera */
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },
        // gradient border for gallery
        '.gradient-border': {
          position: 'relative',
          padding: '2px', 
          backgroundClip: 'padding-box',
          backgroundImage: 'linear-gradient(135deg, #3A4980, #cecfe0)',
          borderRadius: '0.85rem', 
        },
        '.gradient-border img': {
          display: 'block',
          borderRadius: '0.85 rem', 
        },
        '@screen 2xl': {
          '.gradient-border': {
            borderRadius: '1.75rem', // 2XL screens
          },
          '.gradient-border img': {
            borderRadius: '1.75rem', // 2XL screens
          },
        },
        '@screen 3xl': {
          '.gradient-border': {
            borderRadius: '2rem', // 3XL screens
          },
          '.gradient-border img': {
            borderRadius: '2rem', // 3XL screens
          },
        },
      });
    },
  ],
};

