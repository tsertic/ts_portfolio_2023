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
        josefinsans: ["var(--font-josefinsans)"],
        alata: ["var(--font-alata)"],
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-focus": "rgb(var(--color-primary-focus) / <alpha-value>)",
        "primary-content": "rgb(var(--color-primary-content) / <alpha-value>)",

        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "secondary-focus": "rgb(var(--color-secondary-focus) / <alpha-value>)",
        "secondary-content":
          "rgb(var(--color-secondary-content) / <alpha-value>)",
        neutral: "rgb(var(--color-neutral) / <alpha-value>)",
        "neutral-focus": "rgb(var(--color-neutral-focus) / <alpha-value>)",
        "neutral-content": "rgb(var(--color-neutral-content) / <alpha-value>)",

        "base-100": "rgb(var(--color-base-100) / <alpha-value>)",
        "base-200": "rgb(var(--color-base-200) / <alpha-value>)",
        "base-300": "rgb(var(--color-base-300) / <alpha-value>)",
        "base-content": "rgb(var(--color-base-content) / <alpha-value>)",
      },
      fontSize: {
        nav: ["15px", { fontWeight: "400", lineHeight: "15px" }],
        navMobile: ["24px", { fontWeight: "400", lineHeight: "25px" }],
        bodyM: ["16px", { fontWeight: "400", lineHeight: "26px" }],
        bodyMMobile: ["14px", { fontWeight: "400", lineHeight: "23px" }],
        headingXL: ["72px", { fontWeight: "300", lineHeight: "70px" }],
        headingXLMobile: ["40px", { fontWeight: "300", lineHeight: "38px" }],
        headingL: ["48px", { lineHeight: "100%", fontWeight: "300" }],
        headingLMobile: ["32px", { lineHeight: "100%", fontWeight: "300" }],
        headingM: ["32px", { lineHeight: "100%", fontWeight: "300" }],
        headingMMobile: ["24px", { lineHeight: "100%", fontWeight: "300" }],
      },
      boxShadow: {
        themeContainer: "0 0 5px rgba(0,0,0,.15)",
      },
    },
  },
  plugins: [],
};
export default config;
