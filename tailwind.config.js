// tailwind.config.js (or .ts)
const { fontFamily } = require("tailwindcss/defaultTheme"); // Optional: for default fallbacks

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-raleway)", ...fontFamily.sans], // 'font-heading' class
        body: ["var(--font-manrope)", ...fontFamily.sans], // 'font-body' class
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",

        secondary: "var(--color-secondary)",
        "secondary-hover": "var(--color-secondary-hover)",

        background: {
          DEFAULT: "var(--color-bg-main)",
          muted: "var(--color-bg-muted)",
          card: "var(--color-bg-card)",
        },

        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },

        border: {
          light: "var(--color-border-light)",
        },
      },
    },
  },
  plugins: [],
};
