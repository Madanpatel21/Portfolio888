/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        ink: "#080b12",
        panel: "#101725",
        electric: "#7896ff",
        violet: "#a78bfa",
        aqua: "#57e6e0",
      },
      boxShadow: {
        glow: "0 0 60px rgba(120,150,255,.18)",
      },
    },
  },
  plugins: [],
};