import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/shared/ui/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "var(--landing-primary-color)",
				primaryHover: "var(--landing-primary-hover-color)",
				primaryActive: "var(--landing-primary-active-color)",
				secondary: "var(--landing-secondary-color)",
			},
		},
		container: {
			center: true,
			screens: {
				xl: '1160px',
				lg: '1024px',
				md: '768px',
			},
			padding: '1rem'
		},
	},

	plugins: [],
};
export default config;
