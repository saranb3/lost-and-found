/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        illini: {
          orange: "#E84A27", // Illini Orange
          blue: "#13294B",   // Illini Blue
        },
      },
    },
  },
  plugins: [],
}
