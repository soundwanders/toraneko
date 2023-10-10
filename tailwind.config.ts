import type { Config } from 'tailwindcss'

const config: Config = {
  mode: "jit",
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { 
        salmon: { 
          300: "#fdc4b5",
          400: "#faa78b",
          500: "#f37a7d",
          600: "#f16366"
        },
        splinePink: {
          400: "#f3a8ba"
        },
        slate: {
          850: "#1c2c50",
          875: "#15223d"
        }
      },
    },
  },
  plugins: [],
};

export default config;
