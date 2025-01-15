/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3A2A7A",
        "secondary": "#FFD300",
      },
      fontFamily: {
      gothic: ["League Gothic", "sans-serif"],
      sans: ["Pontano Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

