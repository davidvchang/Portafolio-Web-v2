/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Blue-Principal": "#0085FF"
      }
    },

    fontFamily: {
      "inter-Font": ["Inter", "sans-serif"]
    },

    height: {
      '90': '22rem',
    }
  },
  plugins: [],
}

