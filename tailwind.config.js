/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "451px",
			md: "876px",
		},
		extend: {
			backgroundImage: {
				fb: "url('https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png')",
				phone:
					"url('https://www.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png')",
			},
			backgroundPosition: {
				"fb-icon": "-347px -329px",
			},
		},
		keyframes: {
			flip: {
				"0%, 100%": {
					"background-image":
						"url('https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png')",
				},
				"25%": {
					"background-image":
						"url('https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png')",
				},
				"50%": {
					"background-image":
						"url('https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png')",
				},
				"75%": {
					"background-image":
						"url('https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png')",
				},
			},
		},
		animation: {
			flipThrough: "flip 8s ease-out infinite",
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
