/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./assets/js/main.js",],
  
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Mallanna: ["Mallanna", "sans-serif"],
      Ubuntu: ["Ubuntu Condensed", "sans-serif"],
    },
  },
  plugins: [],
};
