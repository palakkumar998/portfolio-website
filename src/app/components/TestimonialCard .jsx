import Image from 'next/image'
import React from 'react'

const TestimonialCard = ({ title, imgUrl, field, description, stars }) => {
	return (
		<div className="mb-4 lg:mb-0">
			<div
                className="relative  block rounded-lg bg-white shadow-md dark:bg-neutral-700"
                style={{
                    // Adding a purple blurry glow behind the cards
                    boxShadow: '0 0 300px rgba(166,55, 255, 0.5)',
                    borderRadius: '12px',
                }}
            >
				<div className="flex justify-center">
					<div className="relative mx-4 -mt-4 w-24 h-24 rounded-full overflow-hidden">
						<Image
							src={imgUrl}
							alt={title}
							className="w-full h-full object-cover"
                            width={200}
                            height={200}
						/>
					</div>
				</div>
				<div className="p-4">
					<h5 className="text-lg font-semibold text-center mb-1">
						{title}
					</h5>
					<h6 className="text-sm text-center text-purple-300 dark:text-primary-400 mb-2">
						{field}
					</h6>
					<div className="flex justify-center mb-2">
						{Array.from({ length: stars }).map((_, index) => (
							<svg
								key={index}
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 17.27l5.18 3.73-1.64-5.36 4.46-3.91-5.55-.39L12 5.5l-1.45 5.84-5.55.39 4.46 3.91-1.64 5.36z" />
							</svg>
						))}
					</div>
					<p className="text-center text-sm text-gray-700 dark:text-gray-300">
						{description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default TestimonialCard
