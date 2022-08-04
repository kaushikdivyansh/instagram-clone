export default function Footer() {
	const footerLinks = [
		{ link: "https://about.facebook.com/", innerText: "Meta" },
		{ link: "https://about.facebook.com/", innerText: "About" },
		{ link: "https://about.facebook.com/", innerText: "Blog" },
		{ link: "https://about.facebook.com/", innerText: "Jobs" },
		{ link: "https://about.facebook.com/", innerText: "Help" },
		{ link: "https://about.facebook.com/", innerText: "API" },
		{ link: "https://about.facebook.com/", innerText: "Privacy" },
		{ link: "https://about.facebook.com/", innerText: "Terms" },
		{ link: "https://about.facebook.com/", innerText: "Top Accounts" },
		{ link: "https://about.facebook.com/", innerText: "Hashtags" },
		{ link: "https://about.facebook.com/", innerText: "Locations" },
		{ link: "https://about.facebook.com/", innerText: "Instagram Lite" },
		{
			link: "https://about.facebook.com/",
			innerText: "Contact Uploading & Non-Users",
		},
	]

	const topicLinks = [
		{ link: "https://about.facebook.com/", innerText: "Dance" },
		{ link: "https://about.facebook.com/", innerText: "Food & Drink" },
		{ link: "https://about.facebook.com/", innerText: "Home & Garden" },
		{ link: "https://about.facebook.com/", innerText: "Music" },
		{ link: "https://about.facebook.com/", innerText: "Visual Arts" },
	]

	return (
		<footer className="flex-shrink-0 mx-5 mb-[52px]">
			<div>
				<div className="mt-6 flex flex-wrap justify-center">
					{footerLinks.map(({ link, innerText }) => (
						<a className="text-xs text-gray-400 mx-2 mb-3" href={link}>
							{innerText}
						</a>
					))}
				</div>
				<div className="flex flex-wrap justify-center">
					{topicLinks.map(({ link, innerText }) => (
						<a className="text-xs text-gray-400 mx-2 mb-3" href={link}>
							{innerText}
						</a>
					))}
				</div>
				<div className="my-3">
					<div></div>
					<div>
						<p className="text-center text-xs text-gray-400">
							&copy; {new Date().getFullYear()} Instagram from Meta
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
