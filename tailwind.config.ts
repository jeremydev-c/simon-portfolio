import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a0e27",
          light: "#1a1f3a",
        },
        accent: {
          DEFAULT: "#14b8a6",
          light: "#5eead4",
        },
      },
    },
  },
  plugins: [],
};

export default config;


