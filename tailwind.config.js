/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          primary:'rgb(151, 134, 37)',
          primary2:'rgb(194, 177, 80)',
        },
        keyframes: {
          slideIn: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
        animation: {
          slideIn: 'slideIn 0.8s ease-out forwards',
          'slideIn-delay': 'slideIn 0.8s ease-out 0.3s forwards',
        },
      },
    },
    plugins: [],
  }