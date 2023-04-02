/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				darkNavy: '#0B0D17',
				lightBlue: '#D0D6F9',
			},
			fontFamily: {
				heading: ['Bellefair'],
				subheading: ['Barlow Condensed'],
				body: ['Barlow Condensed'],
			},
			fontSize: {
				'10xl': '10rem',
			},
		},
	},
	plugins: [],
}
