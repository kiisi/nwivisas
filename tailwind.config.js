/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "lora": ["Lora", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}