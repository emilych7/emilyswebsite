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
          "secondary": "#d6ced9",
          "accent": "#826d8c",
          "neutral": "#F6C8CC",
          "base-100": "#000000ff",
          "info": "#B19FF9",
          "success": "#6A4973",
          "warning": "#f2e9e4",
          "black": "#000000",
          },
        },
      ],
    },
  
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
}

