/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-gray": "#3a4c60",
        "main-blue":"#265bc5",
        "dark-blue": "#33458f",
        "light-blue": "#4167b2",
        "soft-blue": "#26a9e1",
        
      },
      screens: {
        xxl: "1600px",
      },
    },
  },
  plugins: [],
}

