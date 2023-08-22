/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primary: "#e1193e",
        secondary: "#ea5b0d",
      },
      boxShadow: {
        boxshadow:
          "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
      },
      backgroundImage: {
        main: "https://img.freepik.com/premium-photo/indoor-space-gym-ai-technology-generated-image_1112-12540.jpg",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
