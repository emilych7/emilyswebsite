/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4D4C60",
          "secondary": "#FADCDC",
          "accent": "#C45F90",
          "neutral": "#e8c2ca",
          "base-100": "#4D4C60",
          "info": "#FADCDC",
          "success": "#a4c3b2",
          "warning": "#f2e9e4",
          "error": "#ff0000",
          },
        },
      ],
    },
  
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
}

