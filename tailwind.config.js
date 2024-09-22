/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)",
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.5" }],
      sm: ["0.875rem", { lineHeight: "1.5715" }],
      md: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
      lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
      xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
      "2xl": ["1.5rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
      "3xl": ["1.88rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
      "4xl": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
      "5xl": ["3rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
      "6xl": ["3.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
    },
    colors: {
      blue: "#1470AF",
      blueLigh: "#6EA3D5",
      blueHover: "#DDEAF6",
      blueBg: "#F1F6FB",
      black: "#000",
      white: "#fff",
      h3color: "#999999",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1080px",
      xl: "1280px",
      sxl: "1440px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    keyframes: {
      expandBelow: {
        "0%": { transform: "translateY(-50%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      collapseAbove: {
        "0%": { height: "auto", opacity: "1" },
        "100%": { height: "0", opacity: "0" },
      },
    },
    animation: {
      expandBelow: "expandBelow 0.5s ease-in-out forwards",
      collapseAbove: "collapseAbove 0.5s ease-in-out forwards",
    },
  },
  plugins: [],
};
