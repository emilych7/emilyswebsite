/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#EDD1FA",
          "secondary": "#F6C8CC",
          "accent": "#A76286",
          "neutral": "#F6C8CC",
          "base-100": "#A1A9FE",
          "info": "#B19FF9",
          "success": "#6A4973",
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

