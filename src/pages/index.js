import React from "react"
import Layout from "../components/layout"
import HeroSplash from "../components/HeroSplash"
import SEO from "../components/seo"

import "./global.css"

const IndexPage = () => {
	return (
		<Layout className="bg-gray-100">
			<SEO title="Home" />
			<HeroSplash />
		</Layout>
	)
}

export default IndexPage
