import type { Config } from "tailwindcss";
import tailwindcssAnimate from 'tailwindcss-animate';

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
			padding: '1.5rem',
			screens: {
				'2xl': '1200px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					soft: 'hsl(var(--accent-soft))',
					foreground: 'hsl(var(--accent-foreground))'
				},
			},
			transitionTimingFunction: {
				'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'out-back': 'cubic-bezier(0.34, 1.26, 0.64, 1)',
			},
			borderRadius: {
				sm: '0.375rem',
				DEFAULT: '0.5rem',
				md: '0.625rem',
				lg: '0.75rem',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'slide-up': {
					from: {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'drift': {
					'0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
					'50%': { transform: 'translate3d(0, -24px, 0) scale(1.06)' }
				},
				'sheen': {
					'0%': { transform: 'translateX(-120%) skewX(-12deg)' },
					'100%': { transform: 'translateX(320%) skewX(-12deg)' }
				},
				'aurora': {
					'0%, 100%': { opacity: '0.35' },
					'50%': { opacity: '0.7' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s cubic-bezier(0.3, 0.1, 0.3, 1)',
				'slide-up': 'slide-up 0.6s cubic-bezier(0.3, 0.1, 0.3, 1)',
				'drift': 'drift 18s cubic-bezier(0.45, 0, 0.55, 1) infinite',
				'drift-slow': 'drift 26s cubic-bezier(0.45, 0, 0.55, 1) infinite',
				'sheen': 'sheen 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
				'aurora': 'aurora 10s ease-in-out infinite',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
