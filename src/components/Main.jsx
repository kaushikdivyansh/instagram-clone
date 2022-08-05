import AppStoreLogo from "./AppStoreLogo"
import Form from "./Form"

export default function Main({ appStores }) {
	return (
		<main className="flex-grow flex flex-col justify-between pb-8 sm:justify-center sm:space-y-[10px] md:flex-row md:items-center md:justify-start">
		{/* MARK: Instagram App Device Image*/}
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
				</div>
			</div>
			<div className="flex flex-col justify-between flex-grow sm:justify-center sm:space-y-[10px] z-20">
				<div className="sm:bg-white sm:px-10 sm:pb-[10px] sm:border sm:border-gray-300 sm:rounded-[1px]">
				{/* MARK: Instagram Logo */}
					<div className="mt-11 mb-10 flex flex-col flex-wrap items-center">
						<img
							src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
							srcSet="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png%202x"
							alt="Instagram"
							className="h-[51px]"
						/>
					</div>
					<div>
					{/* MARK: Login Form */}
						<Form />
					</div>
				</div>
				<div className="sm:bg-white sm:px-10 sm:py-5 sm:border sm:border-gray-300 sm:rounded-[1px]">
				{/* MARK: New Account Sign up */}
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
				{/* MARK: App Store & Google Play Links */}
					<p className="text-center text-sm">Get the app.</p>
					<div className="flex flex-row justify-center gap-2">
						{appStores.map((store, index) => (
							<AppStoreLogo
								key={index}
								link={store.link}
								imageUrl={store.imageUrl}
								altText={store.altText}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	)
}
