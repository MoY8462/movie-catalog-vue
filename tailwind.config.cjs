/** @type {import('tailwindcss').Config} */
const formKitTailwind = require('@formkit/themes/tailwindcss');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      red: {
        200: "#fecaca",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c"
      },
      sky: {
        500: "#0ea5e9",
        600: "#0284c7",
        900: "#0c4a6e" 
      },
      yellow: {
        500: "#f59e0b",
        600: "#d97706",
      },
      gray:{
        500: {
          100: "#A3A3A3",
          80: "rgba(40, 40, 40, 0.8)"
        },
        700: "#374151",
        800: "#1f2937",
      }
    },
    extend: {

    },
  },
  plugins: [
    formKitTailwind,
    require('./src/theme/navbar.container.js'),
    require('./src/theme/form.view.js'),
    require('./src/theme/base.js'),
    require('./src/theme/modal.js')
  ],
}
