import React from "react"
import { useStaticQuery, graphql } from "gatsby"
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

const CandleCard = () => {
	const data = useStaticQuery(graphql`
		{
			allStrapiCandles {
				edges {
					node {
						name
						strapiId
						new_candle
						id
						ingredients
						image {
							url
						}
					}
				}
			}
		}
	`)
	const candles = data.allStrapiCandles.edges

	return (
		<div className="w-4/5 m-auto pt-24 sm:pt-32">
			<div className="pb-6">
				<h2 className="text-4xl font-bold text-custom_orange">Candles</h2>
				<span className="text-gray-600">Discover our artisan candles</span>
			</div>
			<div className="lg:grid lg:grid-cols-3">
				{candles.map(candle => (
					<div className="pb-6 lg:mx-6">
						<div className="relative pb-5/6">
							<img
								src={`${process.env.API_URL}/${candle.node.image[0].url}`}
								alt={`${candle.node.name} Candle`}
								className="absolute h-full w-full object-cover object-bottom rounded-lg shadow-md"
							/>
						</div>
						<div className="relative px-4 -mt-16">
							<div className="bg-white rounded-lg shadow-lg ">
								<div className="p-6 m-auto">
									{
										// If product is new, display a badge.
										candle.node.new_candle ? (
											<span className="inline-block mt-1 px-2 text-xs bg-green-200 text-green-600 font-semibold uppercase tracking-wide rounded-full ">
												new
											</span>
										) : (
											<br className="hidden lg:inline-block" />
										)
									}

									<h4 className="font-semibold text-xl">{candle.node.name}</h4>

									<div className=" text-gray-700 text-xs uppercase tracking-wide">
										{candle.node.ingredients.map((ingredient, i) => (
											<span>
												{
													// list all candle ingredients
													candle.node.ingredients[i + 1] ? (
														<span key={i}>{ingredient} &bull;</span>
													) : (
														<span key={i}> {ingredient}</span>
													)
												}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default CandleCard
