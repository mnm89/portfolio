const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        fuchsia: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
          950: "#4a044e",
        },
        "nav-background": "#212038d8",
        "nav-active": "#C3C6CB",
      },
      keyframes: {
        wave: {
          "0%, 100%": {
            transform: "rotate(0deg);",
          },
          "10%": {
            transform: "rotate(14deg);",
          },
          "20%": {
            transform: "rotate(-8deg);",
          },
          "30%": {
            transform: "rotate(14deg);",
          },
          "40%": {
            transform: "rotate(-4deg);",
          },
          "50%": {
            transform: "rotate(10deg);",
          },
          "60%": {
            transform: "rotate(0deg);",
          },
        },
      },
      animation: {
        wave: "wave 2.1s linear infinite",
      },
    },
  },
  plugins: [],
};
module.exports = withMT(config);
