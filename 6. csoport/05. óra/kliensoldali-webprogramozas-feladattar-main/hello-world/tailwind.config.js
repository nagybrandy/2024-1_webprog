/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0D3E08",

          "secondary": "#206B09",

          "accent": "#ECBF07",

          "neutral": "#ECBF07",

          "base-100": "#ecfccb",

          "info": "#829A02",

          "success": "#206B09",

          "warning": "#ECBF07",

          "error": "#991b1b",
        },
      },
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

