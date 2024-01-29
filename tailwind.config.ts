import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      backgroundColor: {
        unset: "unset",
      },
      fontFamily: {
        Poppins: "Poppins",
        Poppins_Black: "Poppins_Black",
        PlayfairDisplay: "PlayfairDisplay",
        PlayfairDisplay_Black: "PlayfairDisplay_Black",
        PlayfairDisplay_Italic: "PlayfairDisplay_Italic",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  variants: {
    scrollbar: ["rounded", "dark"],
  },
  darkMode: "class",
  plugins: [],
};
export default config;
