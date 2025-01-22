/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#010203",
      white: "#F9F9F7",
      blue: "#3A418B",
      red: "#E53B42",
    },
    extend: {
      fontFamily: {
        ps: ["Press Start", "sans-serif"],
        sg: ["Space Grotesk", "mono"],
      },
    },
  },
  plugins: [],
};
