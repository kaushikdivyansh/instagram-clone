import { useState } from "react"

export default function Footer() {
	const [language, setLanguage] = useState("English")

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
				<div className="my-3 flex items-center justify-center gap-4">
					<div className="relative">
						<div className="flex flex-row gap-1 items-center">
							<span className="text-xs text-gray-400">{language}</span>
							<svg
								className="rotate-180"
								aria-label="Down Chevron Icon"
								color="#8e8e8e"
								fill="#8e8e8e"
								height="12"
								role="img"
								viewBox="0 0 24 24"
								width="12"
							>
								<path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z" />
							</svg>
						</div>
						<select
							onChange={(e) => setLanguage(e.target.value)}
							className="border-transparent bg-[#fafafa] focus:border-transparent focus:ring-0 text-xs text-gray-400 p-0 inline-block h-full w-full opacity-0 absolute left-0 top-0"
						>
							<option value="Afrikaans">Afrikaans</option>
							<option value="Čeština">Čeština</option>
							<option value="Dansk">Dansk</option>
							<option value="Deutsch">Deutsch</option>
							<option value="Ελληνικά">Ελληνικά</option>
							<option defaultValue value="English">
								English
							</option>
							<option value="English (UK)">English (UK)</option>
							<option value="Español (España)">Español (España)</option>
							<option value="Español">Español</option>
							<option value="Suomi">Suomi</option>
							<option value="Français">Français</option>
							<option value="Bahasa Indonesia">Bahasa Indonesia</option>
							<option value="Italiano">Italiano</option>
							<option value="日本語">日本語</option>
							<option value="한국어">한국어</option>
							<option value="Bahasa Melayu">Bahasa Melayu</option>
							<option value="Norsk">Norsk</option>
							<option value="Nederlands">Nederlands</option>
							<option value="Polski">Polski</option>
							<option value="Português (Brasil)">Português (Brasil)</option>
							<option value="Português (Portugal)">Português (Portugal)</option>
							<option value="Русский">Русский</option>
							<option value="Svenska">Svenska</option>
							<option value="ภาษาไทย">ภาษาไทย</option>
							<option value="Filipino">Filipino</option>
							<option value="Türkçe">Türkçe</option>
							<option value="中文(简体">中文(简体)</option>
							<option value="中文(台灣)">中文(台灣)</option>
							<option value="বাংলা">বাংলা</option>
							<option value="ગુજરાતી">ગુજરાતી</option>
							<option value="हिन्दी">हिन्दी</option>
							<option value="Hrvatski">Hrvatski</option>
							<option value="Magyar">Magyar</option>
							<option value="ಕನ್ನಡ">ಕನ್ನಡ</option>
							<option value="മലയാളം">മലയാളം</option>
							<option value="मराठी">मराठी</option>
							<option value="नेपाली">नेपाली</option>
							<option value="ਪੰਜਾਬੀ">ਪੰਜਾਬੀ</option>
							<option value="සිංහල">සිංහල</option>
							<option value="Slovenčina">Slovenčina</option>
							<option value="தமிழ்">தமிழ்</option>
							<option value="తెలుగు">తెలుగు</option>
							<option value="Tiếng Việt">Tiếng Việt</option>
							<option value="中文(香港)">中文(香港)</option>
							<option value="Български">Български</option>
							<option value="Français (Canada)">Français (Canada)</option>
							<option value="Română">Română</option>
							<option value="Српски">Српски</option>
							<option value="Українська">Українська</option>
						</select>
					</div>
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
