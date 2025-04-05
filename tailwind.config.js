/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "5xl": "2.5rem",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        overpass: ["Overpass", "sans-serif"],
      },
      colors: {
        "primary-light-red": "hsl(356, 100%, 66%)",
        "primary-very-light-red": "hsl(355, 100%, 74%)",
        "very-dark-blue": "hsl(208, 49%, 24%)",
        "white": "hsl(0, 0%, 100%)",
        "grayish-blue": "hsl(240, 2%, 79%)",
        "very-dark-grayish-blue": "hsl(207, 13%, 34%)",
        "very-dark-black-blue": "hsl(240, 10%, 16%)",
        "gradient-very-light-red": "hsl(13, 100%, 72%)",
        "gradient-light-red": "hsl(353, 100%, 62%)",
        "gradient-very-dark-blue": "hsl(237, 17%, 21%)",
        "gradient-very-dark-desaturated-blue": "hsl(237, 23%, 32%)",
      },
      backgroundImage: {
        "hero": "url('assets/images/illustration-editor-mobile.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      borderRadius: {
        "5xl": "6.5rem",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
