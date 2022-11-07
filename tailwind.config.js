/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      },
      boxShadow: {
        "clay-card":
          "inset -10px -10px 20px hsl(302deg 5% 10% / 70%), inset 0 16px 32px hsl(302deg 5% 20%)"
      },
      dropShadow: {
        'clay': '35px 35px 35px hsl(302deg 5% 10%)',
      }
    },
  },
  plugins: [ require('tailwind-scrollbar'),],
}
