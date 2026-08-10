/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2ECC71",
        background: "#0F1115",
        surface: "#1A1D23",
        muted: "#8E939C",
      },
    },
  },
  plugins: [],
};