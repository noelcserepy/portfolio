module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				white: "#FFFFFF",
				background: "#EAEEF5",
				lowContrastBlue: "#D4DBE8",
				lowContrastOrange: "#ECDED4",
				primary: "#0D1823",
				secondary: "#556883",
				orange: "#BF4D00",
			},
			borderWidth: {
				16: "16px",
			},
			maxWidth: {
				centered: "1280px",
				wide: "1536px",
			},
		},
		fontFamily: {
			header: ["Roboto Slab", "serif"],
			title: ["Squada One", "cursive"],
			text: ["Rasa", "serif"],
		},
	},
	plugins: [
		require("prettier-plugin-tailwindcss"),
		require("tailwind-scrollbar-hide"),
	],
};
