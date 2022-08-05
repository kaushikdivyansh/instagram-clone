import { useState } from "react"

export default function FormInput({
	name,
	type,
	placeholder,
	label,
	errorMessage,
	value,
	onChange,
	required,
	pattern,
}) {
	const [focus, setFocus] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	return (
		<div className="relative">
			<input
				id={name}
				name={name}
				type={showPassword ? "text" : type}
				value={value}
				className="peer bg-[#fafafa] border border-gray-200 rounded-[3px] w-[270px] h-[38px] outline-none p-1 text-gray-900 text-xs placeholder-transparent focus:outline-none focus:border-gray-400 border-transparent focus:border-transparent focus:ring-0"
				placeholder={placeholder}
				onChange={onChange}
				onBlur={(e) => setFocus(true)}
				focused={focus.toString()}
				required={required}
				pattern={pattern}
			/>
			<label
				htmlFor={name}
				className="absolute left-2 top-0 text-gray-400 text-[10px] transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-[10px]"
			>
				{label}
			</label>
			{name === "password" && (
				<div className="absolute right-2 top-2 text-sm font-semibold">
					{value.length !== 0 && (
						<button
							type="button"
							onClick={(e) => {
								e.preventDefault()
								setShowPassword(!showPassword)
							}}
						>
							{showPassword ? "Hide" : "Show"}
						</button>
					)}
				</div>
			)}
			<span className="text-xs mt-px text-red-600 hidden">{errorMessage}</span>
		</div>
	)
}
