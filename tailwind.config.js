const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-green": "#82BC1E",
        "brand-red": "#CB0000",
        "brand-blue": "#174888",
        "light-blue-background": "#ECF6FA",
        "blue-divide-color": "#062E63",
      },
    },
  },
  plugins: [],
};
