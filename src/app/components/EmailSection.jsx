'use client'
import React from 'react'

import Facebook from '../../../public/facebook.svg'
import LinkedIn from '../../../public/linkedIn.svg'
import instagram from '../../../public/instagram.svg'
import whatsapp from '../../../public/whatsapp.svg'

import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
	return (
		<section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
			<div className="z-10">
				<h5 className="text-xl font-bold text-white my-2">
					Lets Connect
				</h5>
				<p className="text-gray-500">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Exercitationem, fugit, asperiores aliquid in magni doloribus
					quia dicta eaque ipsa dolorem fugiat, perspiciatis ut minima
					perferendis nemo totam. Saepe, inventore consectetur.
				</p>
				<div className="socials flex flex-row gap-2">
					<Link href="github.com">
						<Image src={Facebook} alt="facebook icon" />
					</Link>
					<Link href="github.com">
						<Image src={instagram} alt="instagram icon" />
					</Link>
					<Link href="github.com">
						<Image src={whatsapp} alt="whatsapp icon" />
					</Link>
					<Link href="github.com">
						<Image src={LinkedIn} alt="LinkedIn icon" />
					</Link>
				</div>
			</div>
			<div>
				<form className="flex flex-col">
					<div className="mb-6">
						<label
							htmlFor="email"
							className="text-white block mb-2 text-sm font-medium"
						>
							Your email
						</label>
						<input
							name="email"
							type="email"
							id="email"
							required
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="Enter Your Gmail here"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="subject"
							className="text-white block text-sm mb-2 font-medium"
						>
							Subject
						</label>
						<input
							name="subject"
							type="text"
							id="subject"
							required
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="what kind of services you want"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="text-white block text-sm mb-2 font-medium"
						>
							Message
						</label>
						<textarea
							name="message"
							id="message"
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="Feel free to Describe Your Requirements"
						/>
					</div>
					<button
						type="submit"
						className="bg-purple-500 hover:bg-purple-900 text-white font-medium py-2.5 px-5 rounded-lg w-full"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	)
}

export default EmailSection
