/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive", "sans-serif"],
        salsa: ["Salsa", "sans-serif"],
      },
      backgroundImage: {
        "food-pattern": "url('../assets/food.webp')",
      },
    },
  },
  plugins: [],
}

