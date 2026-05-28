/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      poppins: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}