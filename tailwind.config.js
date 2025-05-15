const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue,hbs}",
    "./partials/**/*.{html,js,jsx,ts,tsx,vue,hbs}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Work Sans"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          hover: "var(--primary-hover)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          hover: "var(--secondary-hover)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
          hover: "var(--muted-hover)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
          heading: "var(--card-heading)",
        },
        text: {
          secondary: "var(--text-secondary)",
        },

        footer: {
          background: "var(--footer-background)",
          foreground: "var(--footer-foreground)",
          link: "var(--footer-link)",
        },

        border: "var(--border)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
