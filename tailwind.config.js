/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        inter: ['"Inter"', defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: { max: "320px" },
      },
    },
  },
  plugins: [],
};
