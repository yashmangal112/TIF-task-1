/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkish: "#E23744",
        blueish: "#0E2368",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        source: ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [],
};
