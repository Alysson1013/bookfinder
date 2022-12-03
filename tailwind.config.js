/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", "sans-serif"],
        alexandria: ["Alexandria", "sans-serif"],
      },
      colors: {
        "brand-green-1": "#00a86b",
        "brand-green-2": "#004225",
        "brand-gray-1": "#989898",
        "brand-gray-2": "#403E3E",
        "brand-gray": "#181818",
      },
    },
  },
  plugins: [],
};
