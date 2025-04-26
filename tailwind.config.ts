
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: "rgb(15, 4, 76)",
        secondary: "rgb(20, 30, 97)",
        accent: "rgb(120, 122, 145)",
        light: "rgb(238, 238, 238)",
        border: "rgb(120, 122, 145)",
        input: "rgb(238, 238, 238)",
        background: "rgb(15, 4, 76)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, rgb(15, 4, 76), rgb(20, 30, 97))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
