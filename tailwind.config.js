import { createPreset } from 'fumadocs-ui/tailwind-plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./content/**/*.{md,mdx}',
		'./mdx-components.{ts,tsx}',
		'./node_modules/fumadocs-ui/dist/**/*.js',
	],
	theme: {
		extend: {
			fontFamily: {
				stylic: ['var(--font-ceviche)'],
				code: ['var(--font-code)'],
			},
		},
	},
	presets: [createPreset()],
}
