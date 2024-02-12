/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0989FF",
        topHeadingPrimary: "#010f1c",
        topHeadingSecondary: "#021d35",
        pink: "#FD4B6B",
      },
      container: {
        center : true,
        padding : "15px"
      },
      backgroundImage: {
        'banner-1': "url('./images/banner-1.jpg')",
        'banner-2': "url('./images/banner-2.jpg')",
      }
    },
  },
  plugins: [],
}

