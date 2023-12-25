import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "surface-50": "var(--surface-50)",
        "surface-100": "var(--surface-100)",
        "surface-200": "var(--surface-200)",
        "surface-300": "var(--surface-300)",
        "surface-400": "var(--surface-400)",
        "surface-500": "var(--surface-500)",
        "surface-550": "var(--surface-550)",
        "surface-600": "var(--surface-600)",
      },
      fontFamily: {
        roboto: "var(--roboto)",
        archivo: "var(--archivo)",
        archivoBlack: "var(--archivoBlack)",
      },
    },
  },
  plugins: [],
};
export default config;
