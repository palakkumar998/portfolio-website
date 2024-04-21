import Image from 'next/image'
import React from 'react'

const TestimonialCard = ({ title, imgUrl, field, description, stars }) => {
	return (
		<div className="mb-4 lg:mb-0">
			<div
                className="relative  block rounded-lg bg-white shadow-md dark:bg-slate-900"
                style={{
                    // Adding a purple blurry glow behind the cards
                    boxShadow: '0 0 150px rgba(166,55, 255, 0.5)',
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
					<h6 className="text-sm text-center text-primary-300 dark:text-primary-400 mb-2">
						{field}
					</h6>
					<p className="text-center text-sm text-gray-700 dark:text-gray-300">
						{description}
					</p>
					<ul className="mb-6 flex justify-center">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-yellow-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-yellow-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-yellow-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-yellow-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-yellow-400">
                  <path fill="currentColor"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
            </ul>
				</div>
			</div>
		</div>
	)
}

export default TestimonialCard
