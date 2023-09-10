/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary : "#7C3FFF",
        primarylight:"#F3EDFF",
      },
      backgroundImage: {
        hero:"url('https://heroimages.com/static/media/PagesHomeGalleries8.ef7cc4c7.jpg')",
      },
    },
  },
  plugins: [],
} 
