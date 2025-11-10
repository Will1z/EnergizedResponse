import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#000000",
        background: "#FFFFFF",
        text: {
          primary: "#111111",
          secondary: "#555555",
        },
        accent: {
          yellow: "#FFD600",
          teal: "#00FFC2",
          pink: "#FF0054",
        },
        border: "#E6E6E6",
        focus: "#00A2FF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
