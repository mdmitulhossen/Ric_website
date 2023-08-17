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

        keyframes: {
          typing: {
            "0%": {
              width: "0%",
              visibility: "hidden"
            },
            "100%": {
              width: "100%"
            }  
          },
          blink: {
            "50%": {
              borderColor: "transparent"
            },
            "100%": {
              borderColor: "white"
            }  
          }
        },
        animation: {
          typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
        }
      
    },
  },
  plugins: [],
}

