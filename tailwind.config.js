/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        red01: "#64c27b",
        red02: "#9bfab0",
        gray01: "#DCE0E3",
        gray02: "#9A9FA7",
        gray03: "#3D434B",
        gray04: "#343A3F",
        gray05: "#0000003b",
        gray06: "#484F58"
      }
    },
  },
  plugins: [],
}

