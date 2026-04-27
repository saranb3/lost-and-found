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
          orange: "#E84A27",
          blue: "#13294B",
        },
      },
      fontFamily: {
        sans: ['Cause', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
