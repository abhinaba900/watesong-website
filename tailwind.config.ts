import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Tell Tailwind exactly where to look for class names to purge unused CSS
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 2. Centralize your Brand Colors (Optional, but highly recommended)
      // This allows you to write `bg-brand-dark` instead of `bg-[#113239]`
      colors: {
        brand: {
          dark: "#113239", // Main background color (Hero, Master Plan)
          teal: "#52797e", // Lighter background (Feature section)
          blue: "#0C637E", // Accent text color (Floor Plan text)
          gray: {
            light: "#B1B2B0", // Navigation pill bg
            dark: "#A7A8A6", // Navigation pill hover bg
          },
        },
      },
      // 3. Move your custom keyframes here (Removes the need for inline <style> tags!)
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(5px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // A gentle float animation for floating water elements if you want to use Tailwind instead of Framer Motion later
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      // 4. Map the keyframes to usable Tailwind classes
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
