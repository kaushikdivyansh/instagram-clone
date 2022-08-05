import { useState } from "react"
import FormInput from "./FormInput"

export default function Form() {
	const [formInput, setFormInput] = useState({
		username: "",
		password: "",
	})

	const inputs = [
		{
			name: "username",
			type: "text",
			placeholder: "Phone number, username, or email",
			label: "Phone number, username, or email",
			errorMessage: "Username should be 6-16 characters long",
			required: true,
			pattern: "^[A-Za-z0-9]{6,16}$",
		},
		{
			name: "password",
			type: "password",
			placeholder: "Password",
			label: "Password",
			errorMessage: "Password should be 6-16 characters long",
			required: true,
			pattern: "^[A-Za-z0-9]{6,16}$",
		},
	]

	const onChange = (e) => {
		setFormInput({ ...formInput, [e.target.name]: e.target.value })
	}


	return (
		<form action="/login" method="POST" className="flex flex-col flex-wrap items-center">
			<div className="space-y-2">
				{inputs.map((input, index) => (
					<FormInput
						key={input.type + index}
						name={input.name}
						type={input.type}
						placeholder={input.placeholder}
						label={input.label}
						errorMessage={input.errorMessage}
						onChange={onChange}
						required={input.required}
						pattern={input.pattern}
						value={formInput[input.name]}
					/>
				))}
			</div>
			<div className="mt-4">
				<button
					className="w-[270px] bg-[#0095f6] text-white cursor-pointer disabled:cursor-default disabled:bg-[#b2dffd] text-sm py-[5px] rounded font-semibold"
					disabled={
						formInput.password.length <= 5 || formInput.username.length <= 5
					}
				>
					Log In
				</button>
			</div>
			<div className="mt-[18px] flex items-center w-full">
				<div className="flex-grow h-px bg-gray-300" />
				<p className="text-[13px] font-semibold text-gray-400 mx-[18px]">OR</p>
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
	)
}
