import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
        instrument: ["'Instrument Serif'", "serif"],
      },
      colors: {
        "centry-bg":          "#080B14",
        "centry-surface":     "#0D1120",
        "centry-surface-2":   "#111827",
        "centry-navy":        "#1B2352",
        "centry-accent":      "#4F6BED",
        "centry-accent-dim":  "#2d4bc7",
        "centry-border":      "rgba(79,107,237,0.18)",
        "centry-border-sub":  "rgba(255,255,255,0.06)",
        "centry-text":        "#EEF0FF",
        "centry-muted":       "#6B7499",
      },
      animation: {
        "marquee":       "marquee 30s linear infinite",
        "bloom-pulse":   "bloom-pulse 6s ease-in-out infinite",
        "cursor-blink":  "cursor-blink 1.1s step-end infinite",
        "border-spin":   "border-spin 4s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "bloom-pulse": {
          "0%, 100%": { opacity: "0.75", transform: "scale(1)" },
          "50%":       { opacity: "1",    transform: "scale(1.05)" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0" },
        },
        "border-spin": {
          "0%":   { "--border-angle": "0deg" } as Record<string, string>,
          "100%": { "--border-angle": "360deg" } as Record<string, string>,
        },
      },
    },
  },
  plugins: [],
};

export default config;
