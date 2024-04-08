import Image from 'next/image'
import React from 'react'
import profile from '/public/profile.JPG'

const HeroSection = () => {
	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-7 place-self-center">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
						Palak
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eveniet commodi, ad asperiores est doloremque nisi
						sapiente obcaecati officiis a odit nostrum alias
						perferendis necessitatibus, similique facilis culpa
						ipsa, minima cum?
					</p>
					<div className="flex mx-8 my-2 gap-6">
						<button>
							<a
								href="#_"
								class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
							>
								<span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
								<span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
								<span class="relative text-white">Hire Me</span>
							</a>
						</button>
						<button>
							<a
								href="#_"
								class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-purple-400 border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50"
							>
								<span class="absolute left-0 block w-full h-0 transition-all bg-purple-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
								<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										></path>
									</svg>
								</span>
								<span class="relative">Download CV</span>
							</a>
						</button>
					</div>
				</div>

				<div className="col-span-5 place-self-center">
					<div className="rounded-lg bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
						<Image
							src={profile}
							alt="My Profile Picture"
							width={400}
							height={400}
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
