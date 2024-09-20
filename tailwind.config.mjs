/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				COLOR_TEXT_PRIMARY_HOVER: '#6e91d6',
			},
		},
	},
	plugins: [],
}
