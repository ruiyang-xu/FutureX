/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: "1.125rem", //18
      base: "1.25rem", //20
      xl: "1.5rem", //24
      "2xl": "1.75rem", //28
      "3xl": "2.625rem", //42
      "4xl": "3rem", //48
      "5xl": "5.125rem", //82
    },
    colors: {
      blue: "#1470AF",
      blueLigh: "#6EA3D5",
      blueHover: "#DDEAF6",
      blueBg: "#F1F6FB",
      black: "#000",
      white:"#fff",
      h3color:"#999999"
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1080px",

      xl: "1280px",

      "2xl": "1536px",

      "3xl": "1920px",
    },
  },
  plugins: [],
};
