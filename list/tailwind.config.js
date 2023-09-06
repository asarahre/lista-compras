/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0A0A0A",
        orange: {
          "01": "#261A17",
        },
        "pink-dark": "#251622",
        "yellow-dark": "#211E12",
        "green-dark": "#1C2015",
        "orange-dark": "#261A17",
        "purple-dark": "#4E1668",
        "blue-dark": "#1A1D23",
      },
    },
  },
  plugins: [],
};
