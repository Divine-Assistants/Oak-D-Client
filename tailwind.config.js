/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        black: '#1E1E1E',
        white: '#FEFEFE',
        red: '#AC0108',
        blue: '#0A089A',
        gray: '#A1A1A1'
      },
      fontFamily: {
        poppins: ['Poppins'] 
      },
    },
  },
  plugins: [],
}
