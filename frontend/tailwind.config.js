/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      backgroundMain: "#F6F6F6",
      backgroundMainModalOpen: "#2D4059",
      redtitle: "#C40000",
      bluetitle: "#2D4059",
      extend: {
        fontFamily: {
          CafeFrancoise: ["Cafe Francoise_D"],
        },
      },
    },
    plugins: [],
  },
};
