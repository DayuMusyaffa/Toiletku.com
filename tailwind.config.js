/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#183034",
        pool: "#1184a0",
        mint: "#8be0c1",
        sun: "#ffd35a",
        blush: "#ffb8c6",
      },
      boxShadow: {
        sticker: "5px 5px 0 #ffd35a",
        soft: "0 18px 48px rgba(24, 48, 52, 0.10)",
      },
    },
  },
  plugins: [],
}
