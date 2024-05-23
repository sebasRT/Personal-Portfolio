/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";


const config: Config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				k2d: ["K2D", "sans-serif"],
				ubuntu:[ "Ubuntu", "sans-serif"]
			},
			
			colors: {
				'sr': {
					'50': '#f0f7ff',
					'100': '#e1effd',
					'200': '#bcddfb',
					'300': '#81c3f8',
					'400': '#3ea5f2',
					'500': '#1589e2',
					'600': '#086bc1',
					'700': '#08559c',
					'800': '#0b4981',
					'900': '#0f3e6b',
					'950': '#071b31',
				},
				
			}

		},
	},
	plugins: []
}
export default config;
