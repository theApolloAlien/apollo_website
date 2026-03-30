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
        "off-black": "#0D0D0D",
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pixel-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 #C4872A" },
          "50%": { boxShadow: "0 0 0 6px rgba(196,135,42,0)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "beam-extend": {
          "0%": { height: "0", opacity: "0" },
          "100%": { height: "200px", opacity: "0.7" },
        },
        "ufo-land": {
          "0%": { transform: "translateY(-150px) scale(0.8)", opacity: "0" },
          "60%": { transform: "translateY(10px) scale(1.05)", opacity: "1" },
          "100%": { transform: "translateY(0px) scale(1)", opacity: "1" },
        },
        "flash-green": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "0.15" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 3s ease-in-out infinite",
        "pixel-pulse": "pixel-pulse 2s ease-in-out infinite",
        scanline: "scanline 4s linear infinite",
        "beam-extend": "beam-extend 0.8s ease-out forwards",
        "ufo-land": "ufo-land 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "flash-green": "flash-green 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
