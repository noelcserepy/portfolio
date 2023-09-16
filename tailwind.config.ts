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
            light: "#ffffff",
        },
        aspectRatio: {
        '1/2': '1 / 2',
        '2/1': '2 / 1',
        "lines": "174 / 289",
        "mockup": "640 / 480"
      },
    },
  },
  plugins: [],
} satisfies Config;
