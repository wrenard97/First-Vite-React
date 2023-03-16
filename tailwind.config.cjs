/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./images/home_background.png')",
        testimonials: "url('./images/background-1.png')",
        ads: "url('./images/barber-brush-comb-897271.png')",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        crimsontext: ["Crimson-text", "sans-serif"],
      },

      backgroundSize: {
        50: "50rem",
        100: "100rem",
        55: "55rem",
      },
    },
  },
  plugins: [],
};
