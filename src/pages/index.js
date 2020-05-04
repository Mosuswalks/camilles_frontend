import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./global.css"

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
		</Layout>
	)
}

export default IndexPage
