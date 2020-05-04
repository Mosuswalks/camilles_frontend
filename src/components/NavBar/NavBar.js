import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Query Logo for Banner
	const data = useStaticQuery(graphql`
		{
			allFile(filter: { name: { eq: "logo" } }) {
				edges {
					node {
						name
						publicURL
					}
				}
			}
		}
	`)

	// Store logo object
	const logoSVG = data.allFile.edges[0].node

	return (
		<div>
			<header className="bg-gray-900">
				<div className="flex items-center justify-between px-4 py-3">
					<div>
						<img className="h-8" src={logoSVG.publicURL} alt={logoSVG.name} />
					</div>
					<div>
						{isMenuOpen ? (
							<CloseOutlined
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								type="button"
								className="block text-gray-500 text-xl hover:text-white focus:text-white"
							/>
						) : (
							<MenuOutlined
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								type="button"
								className="block text-gray-500 text-xl hover:text-white focus:text-white"
							/>
						)}
					</div>
				</div>
				{isMenuOpen ? (
					<div className="px-2 py-1 pt-2 pb-4 shadow-lg">
						<a
							href="#"
							className="block px-2 py-1 text-white font-semibold hover:bg-gray-800 rounded"
						>
							About
						</a>
						<a
							href="#"
							className="mt-1 block px-2 py-1 text-white font-semibold hover:bg-gray-800 rounded"
						>
							Candles
						</a>
						<a
							href="#"
							className="mt-1 block px-2 py-1 text-white font-semibold hover:bg-gray-800 rounded"
						>
							Contact
						</a>
					</div>
				) : null}
			</header>
		</div>
	)
}

export default NavBar
