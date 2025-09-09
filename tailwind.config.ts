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
        primary: "#6B46C1",
        "primary-dark": "#553C9A",
        secondary: "#9333EA",
        "bg-dark": "#0F0F1E",
        "bg-card": "#1A1A2E",
        "text-light": "#E2E8F0",
        accent: "#F472B6",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;