/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#9ca3af",
        tertiary: "#4B5563",
      },
    },
  },
  plugins: [],
};
