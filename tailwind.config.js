/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        brand: {
          50: "#e6f3ff",
          100: "#d1e8ff",
          200: "#add3ff",
          300: "#7cb4ff",
          400: "#4984ff",
          500: "#2054ff",
          600: "#0028ff",
          700: "#002cff",
          800: "#0026d9",
          900: "#061e93",
          950: "#041162",
        },
      },
    },
  },
  plugins: [],
  addons: ['storybook-tailwind-dark-mode'],
};
