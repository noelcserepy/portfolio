import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        fontFamily: {
            text: ["var(--font-montserrat)"],
            title: ["var(--font-bebas)"],
        },
        colors: {
            dark: "#021112",
            light: "#fffffa",
        },
        aspectRatio: {
        '1/2': '1 / 2',
      },
    },
  },
  plugins: [],
} satisfies Config;
