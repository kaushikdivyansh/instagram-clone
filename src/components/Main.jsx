export default function Main() {
	return (
		<main className="flex-grow flex flex-col justify-between pb-8">
			<div>
				<div className="mt-11 mb-10 flex flex-col flex-wrap items-center">
					<img
						src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
						srcSet="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png%202x"
						alt="Instagram"
						className="h-[51px]"
					/>
				</div>
				<div>
					<form action="" className="flex flex-col flex-wrap items-center">
						<div className="relative border border-gray-200 rounded-[3px] p-1 w-[270px] h-[38px]">
							<input
								id="email"
								name="email"
								type="text"
								className="peer bg-[#fafafa] w-full h-full outline-none border-0 text-gray-900 placeholder-transparent text-xs focus:outline-none focus:border-rose-600 border-transparent focus:border-transparent focus:ring-0"
								placeholder="john@doe.com"
							/>
							<label
								htmlFor="email"
								className="absolute left-2 -top-1 text-gray-600 text-xs transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 peer-focus:-top-1 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:scale-[0.83]"
							>
								Phone number, username, or email
							</label>
						</div>
						<div className="mt-2 relative border border-gray-200 rounded-[3px] p-1 w-[270px] h-[38px]">
							<input
								id="password"
								type="password"
								name="password"
								className="peer bg-[#fafafa] w-full h-full outline-none border-0 text-gray-900 placeholder-transparent focus:outline-hidden focus:outline-0 focus:border-0 border-transparent focus:border-transparent focus:ring-0"
								placeholder="Password"
							/>
							<label
								htmlFor="password"
								className="absolute left-2 -top-1 text-gray-600 text-xs transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 peer-focus:-top-1 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:scale-[0.83]"
							>
								Password
							</label>
						</div>
						<div className="mt-4">
							<button className="w-[270px] bg-blue-200 text-white text-sm py-[5px] rounded font-semibold">
								Log In
							</button>
						</div>
						<div className="mt-[18px] flex items-center w-full">
							<div className="flex-grow h-px bg-gray-300" />
							<p className="text-[13px] font-semibold text-gray-400 mx-[18px]">
								OR
							</p>
							<div className="flex-grow h-px bg-gray-300" />
						</div>
						<div className="mt-[26px]">
							<button className="text-sm font-semibold text-[#375185]">
								<span className="bg-fb inline-block relative mr-2 top-[3px] bg-[length:440px_411px] bg-fb-icon h-4 w-4 bg-no-repeat" />
								Log in with Facebook
							</button>
						</div>
						<a
							href="https://www.instagram.com/accounts/password/reset/"
							className="text-[#375185] text-xs mt-5 active:opacity-50"
						>
							Forgot password?
						</a>
					</form>
				</div>
			</div>
			<div>
				<p className="text-sm text-center">
					Don't have an account?
					<a
						href="https://www.instagram.com/accounts/emailsignup/"
						className="text-blue-500 font-semibold"
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
		</main>
	)
}