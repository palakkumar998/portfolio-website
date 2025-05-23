'use client'
import Image from 'next/image'
import React from 'react'
import profile from '/public/images/profile-4.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const HeroSection = () => {
	return (
		<section className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="text-center sm:text-left"
				>
					<h1 className="text-white mb-4 text-xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
							Hello, I am Palak
						</span>
						<br></br>
						<TypeAnimation
							sequence={[
								// Same substring at the start will only be typed out once, initially
								'Video Editor',
								1000, // wait 1s before replacing "Mice" with "Hamsters"
								'Graphic Designer',
								1000,
								'Cinematographer',
								1000,
								'Freelancer',
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mt-4">
						a passionate video editor and graphic designer with a
						strong eye for detail. I excel at transforming raw
						footage and images into captivating visual stories. My
						goal is to create engaging content that resonates with
						audiences and leaves a lasting impact.
					</p>
					<div className="flex flex-col sm:flex-row mt-6 sm:mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
						<button>
							<a
								href="https://wa.me/7060504783"
								className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"
							>
								<span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
								<span className="relative text-white">
									Contact Me
								</span>
							</a>
						</button>
						{/* <button>
							<a
								href="https://mail.google.com/mail/u/0/#inbox?compose=new"
								className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-primary-400 border-2 border-primary-500 rounded-full hover:text-white group hover:bg-gray-50"
							>
								<span className="absolute left-0 block w-full h-0 transition-all bg-primary-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
								<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
									<svg
										className="w-5 ml-2 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										></path>
									</svg>
								</span>
								<span className="relative">Download CV</span>
							</a>
						</button> */}
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="text-center ml-10 sm:text-right relative"
				>
					<div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
						<div className="rounded-full  overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-600 w-full h-full">
							<Image
								src={profile}
								alt="My Profile Picture"
								layout="fill"
								objectFit="cover"
								className="rounded-full"
							/>
						</div>
						<div className="absolute inset-0 rounded-full overflow-hidden">
							<div className="glow glow-animation"></div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default HeroSection
