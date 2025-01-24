/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "eventr-gray": {
          50: "#efedf2", //90%
          100: "#babac4", //75%
          200: "#8c8c9a", //60%
          300: "#75758a", //50%
          500: "#3b3b45", //25%
          700: "#232329", //15%
          800: "#17171c", //10%
          900: "#0c0c0e", //5%
          950: "#070708", //3%
        },
        "primary": "#301b82",
        "secondary": "#FFD300",
      },
      fontFamily: {
      gothic: ["League Gothic", "sans-serif"],
      sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

