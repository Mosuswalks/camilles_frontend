/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
	return (
		<div className="antialiased bg-gray-200">
			<NavBar />

			<main>{children}</main>
			<Footer />
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
