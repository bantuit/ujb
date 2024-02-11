/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#ffff', // Your custom background base color
      },
    },
  },
  plugins: [require("daisyui")],
}

