/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        Caprasimo: ["Caprasimo", "cursive"],
        RobotoSlab: ["Roboto Slab", "serif"],
        YsabeauOffice: ["Ysabeau Office", "sans-serif"],
      },
    },
  },
  plugins: [],
};
