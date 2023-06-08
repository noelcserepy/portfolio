import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        fontFamily: {
            sans: ["var(--font-montserrat)", "sans-serif"],
            title: ["var(--font-bebas)", "sans-serif"],
        },
        colors: {
            dark: "#021112",
            light: "#fffffa",
        }
    },
  },
  plugins: [],
} satisfies Config;
