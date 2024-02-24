/** @type {import('tailwindcss').Config} */
const withAnimations = require("animated-tailwindcss");
module.exports = withAnimations({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    //   "2xl": "1440px",
    // },

    extend: {
      fontFamily: {
        cinzel: ["Cinzel Decorative", "cursive"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [""],
  },
});
