
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			/* Escala tipográfica en rem: escala con la preferencia del navegador
			   y nunca baja de 12px (accessibility.md › Vision). */
			fontSize: {
				caption: ['0.8125rem', { lineHeight: '1.4' }],
				label: ['0.875rem', { lineHeight: '1.45' }],
				meta: ['0.9375rem', { lineHeight: '1.5' }],
				body: ['1.0625rem', { lineHeight: '1.5' }],
				lead: ['1.3125rem', { lineHeight: '1.42', letterSpacing: '0.01em' }],
				title: ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
				headline: ['2rem', { lineHeight: '1.15', letterSpacing: '-0.016em' }],
				display: ['3rem', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
			},
			fontFamily: {
				/* Pila del sistema: SF Pro en Apple, la nativa en el resto. */
				/* SF Pro en dispositivos Apple; Inter como respaldo cercano fuera. */
				sans: [
					'-apple-system',
					'BlinkMacSystemFont',
					'"SF Pro Text"',
					'"SF Pro Display"',
					'Inter',
					'"Helvetica Neue"',
					'Arial',
					'sans-serif',
				],
				display: [
					'-apple-system',
					'BlinkMacSystemFont',
					'"SF Pro Display"',
					'Inter',
					'"Helvetica Neue"',
					'Arial',
					'sans-serif',
				],
				mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				"blue-accent": "#3B82F6",
				"turquoise": "#06B6D4",
				/* HUD console tokens (see src/index.css). */
				void: 'rgb(var(--void) / <alpha-value>)',
				deep: 'rgb(var(--deep) / <alpha-value>)',
				panel: 'rgb(var(--panel) / <alpha-value>)',
				panel2: 'rgb(var(--panel-2) / <alpha-value>)',
				line: 'rgb(var(--line) / <alpha-value>)',
				arc: 'rgb(var(--arc) / <alpha-value>)',
				gold: 'rgb(var(--gold) / <alpha-value>)',
				mag: 'rgb(var(--mag) / <alpha-value>)',
				txt: 'rgb(var(--txt) / <alpha-value>)',
				mut: 'rgb(var(--mut) / <alpha-value>)',
				blue: 'rgb(var(--blue) / <alpha-value>)',
				green: 'rgb(var(--green) / <alpha-value>)',
				orange: 'rgb(var(--orange) / <alpha-value>)',
				purple: 'rgb(var(--purple) / <alpha-value>)',
				pink: 'rgb(var(--pink) / <alpha-value>)',
				teal: 'rgb(var(--teal) / <alpha-value>)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"spin-slow": {
					from: { transform: "rotate(0deg)" },
					to: { transform: "rotate(360deg)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"spin-slow": "spin-slow 10s linear infinite",
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		}
	},
		plugins: [animate],
	} satisfies Config;
