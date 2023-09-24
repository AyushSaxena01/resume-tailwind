/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js","./*.html"],
  theme: {
    extend: {
      screens:{
        "400":"460px",
      }
    },
  },
  plugins: [],
}

