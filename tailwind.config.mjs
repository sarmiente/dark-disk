import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...fontFamily.sans],
				heading: ["Poppins", ...fontFamily.sans],
			  }
		},
	},
	plugins: [
		require('@tailwindcss/forms'), require("@tailwindcss/typography"), require('tailwindcss-motion')
	],
}
