import React from "react"
import Layout from "../components/layout"
import HeroSplash from "../components/HeroSplash"
import CandleCard from "../components/CandleCard"
import SEO from "../components/seo"

import "./global.css"

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<HeroSplash />
			<CandleCard />
		</Layout>
	)
}

export default IndexPage
