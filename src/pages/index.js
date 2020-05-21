import React from "react"
import Layout from "../components/layout"
import HeroSplash from "../components/HeroSplash"
import CandleCard from "../components/CandleCard"
import About from "../components/About"
import SEO from "../components/seo"

import "./global.css"

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<HeroSplash />
			<About />
			<CandleCard />
		</Layout>
	)
}

export default IndexPage
