import Form from "./Form"

export default function Main() {
	return (
		<main className="flex-grow flex flex-col justify-between pb-8 sm:justify-center sm:space-y-[10px] md:flex-row md:items-center md:justify-start">
			<div className="hidden md:block relative">
				<div className="h-[634px] w-[468px] absolute z-0">
					<img
						className="h-full w-full"
						src="https://www.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png"
						alt="Phone"
					/>
				</div>
				<div className="h-[634px] w-[468px] relative z-10">
					<div className="h-[545px] relative -right-[158px] top-6 animate-flipThrough delay-1000 bg-contain bg-no-repeat" />

					{/* <img
						className="h-[545px] absolute right-[59px] top-6"
						src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
						alt=""
					/>
					<img
						className="h-[545px] absolute right-[59px] top-6"
						src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
						alt=""
					/>
					<img
						className="h-[545px] absolute right-[59px] top-6"
						src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
						alt=""
					/>
					<img
						className="h-[545px] absolute right-[59px] top-6"
						src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
						alt=""
					/> */}
					{/* <motion.img
						className="h-[545px] absolute right-[59px] top-6"
						src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
						alt=""
						initial={{ opacity: 0 }}

						animate={{ opacity: 1 }}
						transition={{ repeat: Infinity, duration: 2 }}
					/>
					<motion.img
						className="h-[545px] absolute right-[59px] top-6"
						src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
						alt=""
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ repeat: Infinity, duration: 2, delay: 2 }}
					/>
					<motion.img
						className="h-[545px] absolute right-[59px] top-6"
						src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
						alt=""
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ repeat: Infinity, duration: 2, delay: 4 }}
					/>
					<motion.img
						className="h-[545px] absolute right-[59px] top-6"
						src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
						alt=""
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ repeat: Infinity, duration: 2, delay: 6 }}
					/> */}
				</div>
			</div>
			<div className="flex flex-col justify-between flex-grow sm:justify-center sm:space-y-[10px] z-20">
				<div className="sm:bg-white sm:px-10 sm:pb-[10px] sm:border sm:border-gray-300 sm:rounded-[1px]">
					<div className="mt-11 mb-10 flex flex-col flex-wrap items-center">
						<img
							src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
							srcSet="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png%202x"
							alt="Instagram"
							className="h-[51px]"
						/>
					</div>
					<div>
						<Form />
					</div>
				</div>
				<div className="sm:bg-white sm:px-10 sm:py-5 sm:border sm:border-gray-300 sm:rounded-[1px]">
					<p className="text-sm text-center">
						Don't have an account?
						<a
							href="https://www.instagram.com/accounts/emailsignup/"
							className="text-blue-500 font-semibold ml-1"
						>
							Sign up
						</a>
					</p>
				</div>
				<div className="space-y-5">
					<p className="text-center text-sm">Get the app.</p>
					<div className="flex flex-row justify-center gap-2">
						<a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo">
							<img
								className="h-10"
								src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
								alt="Download on the App Store"
							/>
						</a>
						<a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D5CAF83D2-ED55-4BA3-BCBC-5BAD14BBB911%26utm_content%3Dlo%26utm_medium%3Dbadge">
							<img
								className="h-10"
								src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
								alt="Get it on Google Play"
							/>
						</a>
					</div>
				</div>
			</div>
		</main>
	)
}
