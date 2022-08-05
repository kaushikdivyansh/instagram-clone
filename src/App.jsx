import { Layout, Main, Footer } from "./components"

function App() {
	// MARK: Footer links
	const footerLinks = [
		{ link: "https://about.facebook.com/", innerText: "Meta" },
		{ link: "https://about.instagram.com/", innerText: "About" },
		{ link: "https://about.instagram.com/blog", innerText: "Blog" },
		{ link: "https://about.instagram.com/about-us/careers/", innerText: "Jobs" },
		{ link: "https://help.instagram.com/", innerText: "Help" },
		{ link: "https://developers.facebook.com/docs/instagram", innerText: "API" },
		{ link: "https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect", innerText: "Privacy" },
		{ link: "https://help.instagram.com/581066165581870", innerText: "Terms" },
		{ link: "https://www.instagram.com/directory/profiles/", innerText: "Top Accounts" },
		{ link: "https://www.instagram.com/directory/hashtags/", innerText: "Hashtags" },
		{ link: "https://www.instagram.com/explore/locations/", innerText: "Locations" },
		{ link: "https://www.instagram.com/web/lite/", innerText: "Instagram Lite" },
		{
			link: "https://www.facebook.com/help/instagram/261704639352628",
			innerText: "Contact Uploading & Non-Users",
		},
	]

	const topicLinks = [
		{ link: "https://www.instagram.com/topics/dance-and-performance/", innerText: "Dance" },
		{ link: "https://www.instagram.com/topics/food-and-drink/", innerText: "Food & Drink" },
		{ link: "https://www.instagram.com/topics/home-and-garden/", innerText: "Home & Garden" },
		{ link: "https://www.instagram.com/topics/music/", innerText: "Music" },
		{ link: "https://www.instagram.com/topics/visual-arts/", innerText: "Visual Arts" },
	]

	// MARK: App Store & Google Play Store data
	const appStores = [
		{
			link: "https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo",
			imageUrl:
				"https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png",
			altText: "Download on the App Store",
		},
		{
			link: "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D5CAF83D2-ED55-4BA3-BCBC-5BAD14BBB911%26utm_content%3Dlo%26utm_medium%3Dbadge",
			imageUrl:
				"https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png",
			altText: "Get it on Google Play",
		},
	]

	return (
		<Layout>
			<section className="flex flex-col flex-wrap items-center min-h-screen">
				<Main appStores={appStores} />
				<Footer footerLinks={footerLinks} topicLinks={topicLinks} />
			</section>
		</Layout>
	)
}

export default App
