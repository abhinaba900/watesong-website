import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Tell Tailwind exactly where to look for class names to purge unused CSS
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        brand: {
          dark: "#113239",
          teal: "#52797e",
          blue: "#0C637E",
          gray: {
            light: "#B1B2B0",
            dark: "#A7A8A6",
          },
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(5px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
