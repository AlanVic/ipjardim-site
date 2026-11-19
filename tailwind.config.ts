import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          escuro: "#0d6b4f",
          primario: "#1a7a5e",
          medio: "#2a9d7c",
          claro: "#4cbb96",
          suave: "#e8f5f0",
        },
      },
      fontFamily: {
        mosk: ["Mosk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
