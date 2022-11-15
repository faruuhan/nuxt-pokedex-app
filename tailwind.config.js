/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts,pug}",
    "./layouts/**/*.vue",
    "./pages/**/*.{vue,pug}",
    "./sources/**/*.{vue,pug}",
    "./plugins/**/*.{js,ts,pug]}",
    "./nuxt.config.{js,ts,pug}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
