/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Blue-Principal": "#0085FF",
        "Blue-Photo-BG": "#7193BE"
      },

      fontFamily: {
        "inter-Font": ["Inter", "sans-serif"]
      },
  
      height: {
        '90': '22rem',
      },
      width: {
        '90': '22rem',
        '85': '21rem',
      },
      borderWidth: {
        '6': "6px"
      }
    },
  },
  plugins: [],
}

