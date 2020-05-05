import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BulbFilled } from "@ant-design/icons"

const CandleCard = () => {
	const data = useStaticQuery(graphql`
		{
			allStrapiCandles {
				edges {
					node {
						name
						strapiId
						in_stock
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
		<div className="w-4/5 m-auto pt-10">
			<h2 className="text-2xl font-bold text-gray-900 text-center pb-6">
				Candles
			</h2>
			{candles.map(candle => (
				<div className="rounded-lg overflow-hidden pb-6">
					<div className="bg-white rounded-lg border">
						{console.log(candle)}
						<img
							src={`http://localhost:1337${candle.node.image[0].url}`}
							alt={`${candle.node.name} Candle`}
							className="rounded"
						/>
						<div className="p-6 m-auto">
							<h4 className="font-semibold text-xl">{candle.node.name}</h4>

							<div className=" text-gray-700 text-xs uppercase tracking-wide">
								{candle.node.ingredients.map((ingredient, i) => (
									<span>
										{candle.node.ingredients[i + 1] ? (
											<span key={i}>{ingredient} &bull;</span>
										) : (
											<span key={i}> {ingredient}</span>
										)}
									</span>
								))}
							</div>
							{candle.node.in_stock ? (
								<div className="w-24 text-center bg-green-500 text-gray-100 rounded mt-1">
									In Stock
								</div>
							) : (
								<div className="w-24 text-center bg-gray-500 text-gray-100 rounded mt-1">
									Unavailable
								</div>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default CandleCard
