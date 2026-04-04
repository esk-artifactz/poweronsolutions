/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f7e0',
          100: '#b3e6b3',
          200: '#80d480',
          300: '#4dc24d',
          400: '#26b326',
          500: '#00a300',
          600: '#009100',
          700: '#008000',
          800: '#006e00',
          900: '#005c00',
          950: '#004a00'
        },
        logoGreen: '#4CAF50',
        logoYellow: '#FFD700',
      },
    },
  },
  plugins: [],
}
