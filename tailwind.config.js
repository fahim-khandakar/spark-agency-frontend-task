/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryText: "#E7E7E7",
        heroTitle: "#F9F6F2",
        btnBg: "#1677FF",
        formTitle: "#11162E",
      },
    },
  },
  plugins: [],
};
