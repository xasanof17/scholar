/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    screens: {
      ss: "376px",
      xs: "424px",
      sm: "641px",
      md: "769px",
      lg: "1025px",
      xl: "1236px",
      '2xl': "1441px",
    },
    extend: {
      fontFamily: {
        sans: ["Fira Sans", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      colors: {
        yellow: "#FFCF00",
        light: '#747475'
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
