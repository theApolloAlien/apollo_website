import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F2EDE4",
        "brown-dark": "#2C1810",
        "brown-mid": "#6B3A2A",
        "green-dark": "#1E3A1E",
        "green-mid": "#4A7C4A",
        amber: "#C4872A",
      },
      fontFamily: {
        pixel: ["var(--font-press-start)", "monospace"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
