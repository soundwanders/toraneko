/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    transitionDuration: {
      0: "0ms",
      1000: "1000ms",
      2000: "2000ms",
      3000: "3000ms"
    },
  },
  plugins: [],
}
