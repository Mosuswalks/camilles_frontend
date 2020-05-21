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
		<div className=" bg-gray-200 pt-12">
			<div className=" sm:w-4/5 sm:m-auto sm:flex sm:justify-evenly sm:bg-gray-100">
				<div className=" sm:w-1/2 sm:py-20 sm:px-12">
					<h1 className="text-3xl text-gray-700 leading-tight sm:text-3xl sm:px-2">
						Welcome to <br />
						<span className="text-custom_green font-bold">
							Camille's Candle Shop
						</span>
					</h1>
					<p className="text-xs text-orange-600 font-normal sm:text-xs sm:ml-1 sm:px-2">
						*Online store launching Sept. 2020*
					</p>
					<div className="mt-2  w-4/5 m-auto text-gray-600 sm:mt-4 sm:px-4 sm:text-md leading-7">
						<ul className="list-disc">
							<li>Natural soy candles (vegan)</li>
							<li>100% recycled containers</li>
							<li>Made with high quality essential and fragrance oils</li>
							<li>Unique small batch products</li>
							<li>Hand poured in Toronto</li>
						</ul>
					</div>
				</div>

				<div className="hidden sm:block bg-white rounded-lg sm:w-1/2 relative">
					<img
						className="shadow-xl absolute inset-0 h-full w-full object-cover object-center"
						src={candleJPG.publicURL}
						alt={candleJPG.name}
					/>
				</div>
			</div>
		</div>
	)
}

export default HeroSplash
