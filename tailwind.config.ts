/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";


const config: Config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				k2d: ["K2D", "sans-serif"],
				ubuntu: ["Ubuntu", "sans-serif"]
			},

			colors: {
				'sr': {

					'50': '#eff8ff',
					'100': '#dff1ff',
					'200': '#b8e4ff',
					'300': '#78d0ff',
					'400': '#1eb1ff',
					'500': '#1eb1ff',
					'600': '#0694ff',
					'700': '#0080ff',
					'800': '#0861c5',
					'900': '#0d549b',
					'950': '#0e335d',
				},


			}

		},
	},
	plugins: []
}
export default config;
