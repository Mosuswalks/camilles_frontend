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
			<header className="bg-custom_green sm:flex sm: justify-between sm:px-4 sm:py-3 sm:items-center">
				<div className="flex items-center justify-between px-4 py-3 sm:p-0">
					<div>
						<img className="h-8" src={logoSVG.publicURL} alt={logoSVG.name} />
					</div>
					<div className="sm:hidden">
						{isMenuOpen ? (
							<CloseOutlined
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								type="button"
								className="block text-gray-400 text-xl hover:text-white focus:text-white"
							/>
						) : (
							<MenuOutlined
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								type="button"
								className="block text-gray-400 text-xl hover:text-white focus:text-white"
							/>
						)}
					</div>
				</div>

				<div
					className={`${
						isMenuOpen ? "block" : "hidden"
					} text-gray-100 px-2 py-1 pt-2 pb-4 sm:block sm:flex sm:p-0`}
				>
					<a href="#" className="block px-2 py-1 hover:bg-gray-800 rounded">
						Candles
					</a>
					<a
						href="#"
						className="mt-1 block px-2 py-1 hover:bg-gray-800 rounded sm:mt-0 sm:ml-2"
					>
						About
					</a>
					<a
						href="#"
						className="mt-1 block px-2 py-1 hover:bg-gray-800 rounded sm:mt-0 sm:ml-2"
					>
						Contact
					</a>
					<a href="#" className="hidden sm:block pl-2">
						<div className="xs:hidden bg-custom_orange rounded-full m-auto">
							<span className="mt-1 px-2 block py-1 text-gray-100 font-semibold hover:bg-gray-800 rounded sm:mt-0 sm:ml-1 sm:mr-1">
								Order Now
							</span>
						</div>
					</a>
				</div>
			</header>
		</div>
	)
}

export default NavBar
