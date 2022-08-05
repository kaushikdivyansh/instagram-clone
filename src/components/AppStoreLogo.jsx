export default function AppStoreLogo({ link, imageUrl, altText }) {
	return (
		<a href={link}>
			<img className="h-10" src={imageUrl} alt={altText} />
		</a>
	)
}
