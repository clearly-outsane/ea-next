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
        "light-blue-background": "#ECF6FA",
        "blue-divide-color": "#062E63",
      },
    },
  },
  plugins: [],
};
