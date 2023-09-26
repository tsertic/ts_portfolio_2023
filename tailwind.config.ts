import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          focus: "rgb(var(--color-primary-focus) / <alpha-value>)",
          content: "rgb(var(--color-primary-content) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
          focus: "rgb(var(--color-secondary-focus) / <alpha-value>)",
          content: "rgb(var(--color-secondary-content) / <alpha-value>)",
        },
        neutral: {
          DEFAULT: "rgb(var(--color-neutral) / <alpha-value>)",
          focus: "rgb(var(--color-neutral-focus) / <alpha-value>)",
          content: "rgb(var(--color-neutral-content) / <alpha-value>)",
        },
        base: {
          100: "rgb(var(--color-base-100) / <alpha-value>)",
          200: "rgb(var(--color-base-200) / <alpha-value>)",
          300: "rgb(var(--color-base-300) / <alpha-value>)",
          content: "rgb(var(--color-base-content) / <alpha-value>)",
        },
      },
      fontSize: {
        nav: ["15px", { fontWeight: "400", lineHeight: "15px" }],
        navMobile: [
          "24px",
          { fontWeight: "400", lineHeight: "25px", letterSpacing: "3px" },
        ],
        bodyL: ["22px", { fontWeight: "300", lineHeight: "40px" }],
        bodyLMobile: ["18px", { fontWeight: "300", lineHeight: "26px" }],
        bodyM: [
          "16px",
          { fontWeight: "400", lineHeight: "26px", letterSpacing: ".8px" },
        ],
        bodyMMobile: ["15px", { fontWeight: "400", lineHeight: "23px" }],
        headingXL: ["72px", { fontWeight: "300", lineHeight: "70px" }],
        headingXLMobile: ["32px", { fontWeight: "300", lineHeight: "38px" }],
        headingL: ["48px", { lineHeight: "100%", fontWeight: "300" }],
        headingLMobile: ["26px", { lineHeight: "100%", fontWeight: "300" }],
        headingM: ["32px", { lineHeight: "100%", fontWeight: "300" }],
        headingMMobile: ["22px", { lineHeight: "100%", fontWeight: "300" }],
        headingS: ["24px", { lineHeight: "100%", fontWeight: "300" }],
        headingSMobile: ["18px", { lineHeight: "100%", fontWeight: "300" }],
      },
      boxShadow: {
        themeContainer: "0 0 5px rgba(0,0,0,.15)",
        themeHover: "0 0 5px 1px rgba(0,0,0, .2)",
      },
      backgroundColor: {
        "neutral-gradient":
          "linear-gradient(45deg, var(--color-neutral) , var(--color-neutral-focus))",
      },
    },
  },
  plugins: [],
};
export default config;
