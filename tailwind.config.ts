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
        bone: "var(--bone)",
        "bone-2": "var(--bone-2)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        line: "var(--line)",
        band: "var(--band)",
        "band-2": "var(--band-2)",
        "band-line": "var(--band-line)",
        accent: "var(--accent)",
        gold: "var(--gold)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "1120px",
        copy: "56ch",
      },
      fontSize: {
        display: [
          "clamp(2.6rem, 7.4vw, 5.2rem)",
          { lineHeight: "1.12", letterSpacing: "-0.005em" },
        ],
        section: [
          "clamp(1.9rem, 4.4vw, 3rem)",
          { lineHeight: "1.18", letterSpacing: "-0.005em" },
        ],
        eyebrow: [
          "0.72rem",
          { lineHeight: "1.3", letterSpacing: "0.16em" },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
