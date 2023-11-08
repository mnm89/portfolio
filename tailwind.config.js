/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#437C90",
        primaryLight: "#74aabe",
        secondary: "#823329",
        secondaryLight: "#d37f73",
        accent: "#A98743",
        accentLight: "#F7C548",
        background: "#EEEBD3",
      },
    },
  },
  plugins: [],
};
