import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const HeroSplash = () => {
	const data = useStaticQuery(graphql`
		{
			allFile(filter: { name: { eq: "heroCandle" } }) {
				edges {
					node {
						name
						publicURL
					}
				}
			}
		}
	`)
	const candleJPG = data.allFile.edges[0].node
	return (
		<div>
			<div className="px-3 py-3">
				<img
					className=" rounded-lg shadow-xl"
					src={candleJPG.publicURL}
					alt={candleJPG.name}
				/>
				<h1 className="mt-6 text-2xl px-4 font-bold text-gray-800 leading-tight">
					Welcome to <br />
					<span className="text-indigo-700">Camille's Candle Shop</span>
				</h1>
				<p className="px-4 text-orange-600 font-normal text-sm">
					*Online store launching Sept. 2020*
				</p>
				<div className="mt-2 px-8 font-hairline text-gray-700">
					<ul className="list-disc">
						<li>Natural soy candles (vegan)</li>
						<li>100% recycled containers</li>
						<li>Made with high quality essential and fragrance oils</li>
						<li>Unique small batch products</li>
						<li>Hand poured in Toronto</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default HeroSplash
