/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "451px",
			md: "876px"
		},
		extend: {
			backgroundImage: {
				fb: "url('https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png')",
				phone: "url('https://www.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png')"
			},
			backgroundPosition: {
				"fb-icon": "-347px -329px",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
