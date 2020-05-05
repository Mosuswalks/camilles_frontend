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
		<div className="pt-10">
			<h2 className="text-2xl font-bold text-gray-900 text-center pb-6">
				Candles
			</h2>
			{candles.map(candle => (
				<div className="pb-6">
					<div className="relative pb-5/6">
						<img
							src={`http://localhost:1337${candle.node.image[0].url}`}
							alt={`${candle.node.name} Candle`}
							className="absolute h-full w-full object-cover object-bottom rounded-lg shadow-md"
						/>
					</div>
					<div className="relative px-4 -mt-16">
						<div className="bg-white rounded-lg shadow-lg">
							<div className="p-6 m-auto">
								{candle.node.new_candle ? (
									<span className="inline-block mt-1 px-2 text-xs bg-green-200 text-green-600 font-semibold uppercase tracking-wide rounded-full">
										new
									</span>
								) : null}

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
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default CandleCard
