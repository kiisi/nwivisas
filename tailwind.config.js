/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#03357c",
        secondary: "#9bdef6",
      },
      fontFamily: {
        "lora": ["Lora", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        "fontello": ["fontello", "sans-serif"],
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
      keyframes: {
        'to-right-from-left': {
          '49%': {transform: 'translate(100%)'},
          '50%': {opacity: '0', transform: 'translate(-100%)'},
          '51%': {opacity: '1'},
        },
        "wiggle": {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        }
      },
      animation: {
        'to-right-from-left': 'to-right-from-left .4s ease-in-out',
        "wiggle": 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}