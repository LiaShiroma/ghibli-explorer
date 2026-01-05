function Button( {variant = "primary", children, ...rest} ) {
	const baseClasses = "flex items-center justify-center gap-2 transition font-[Nunito] text-sm font-bold cursor-pointer"
	const variants = {
		primary: "bg-darkGreen text-white rounded-xl w-full py-4 px-6  md:w-2xl hover:bg-darkGreen/90",
		light: "bg-white text-darkGreen rounded-full py-3 px-8 hover:bg-bg"
	}
	return (
		<button className={`${baseClasses} ${variants[variant]}`} {...rest}>{children}</button>
	)
}

export default Button