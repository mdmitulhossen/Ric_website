/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily:{
      'body': ['Roboto', "sans-serif"],
    },
    extend: {
      colors: {
        'r1': '#00E2E2',
        'r2': '#16AFB2',
        'bg': "#00233F",
      },
    },
  },
  plugins: [],
}

