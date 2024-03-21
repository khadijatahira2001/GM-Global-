/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        primary: "#FFA500",
        secondary: "#4CAF50",
        content_color:"#666464",
        purple: "#5b4bc2"
      }
    },
  },
  plugins: [],
}

