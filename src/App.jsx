import { Layout, Main, Footer } from "./components"

function App() {
	return (
		<Layout>
			<section className="flex flex-col flex-wrap items-center min-h-screen">
				<Main />
				<Footer />
			</section>
		</Layout>
	)
}

export default App
