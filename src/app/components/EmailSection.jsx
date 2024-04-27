'use client'
import Facebook from '../../../public/facebook.svg'
import instagram from '../../../public/instagram.svg'
import whatsapp from '../../../public/whatsapp.svg'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

const EmailSection = () => {
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')

	const sendMail = async (e) => {
		e.preventDefault()

		const resonse = await fetch('/api/send', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				email,
				subject,
				message,
			}),
		})
		console.log(await resonse.json())
	}

	return (
		<section
			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative "
			id="contact"
		>
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
			<div className="z-10">
				<h5 className="text-xl font-bold text-white my-2">
					Lets Connect
				</h5>
				<p className="text-gray-500">
					Ready to bring your vision to life? Let &apos;s collaborate!
					Whether it is video editing, design, or more, I am here to
					make your projects shine. Get in touch today and let &apos;s
					create something amazing together. Your journey to
					outstanding content starts here!
				</p>
				<div className="socials flex flex-row gap-2">
					<Link href="https://www.facebook.com/falak.kr.5">
						<Image src={Facebook} alt="facebook icon" />
					</Link>
					<Link href="https://www.instagram.com/palakkumar09?igsh=MWc4cmRsODk1NjZxMQ%3D%3D&utm_source=qr">
						<Image src={instagram} alt="instagram icon" />
					</Link>
					<Link href="https://wa.me/7060504783">
						<Image src={whatsapp} alt="whatsapp icon" />
					</Link>
				</div>
			</div>
			<div>
				<form onSubmit={sendMail} className="flex flex-col">
					<div className="mb-6">
						<label
							htmlFor="email"
							className="text-white block mb-2 text-sm font-medium"
						>
							Your email
						</label>
						<input
							onChange={(e) => {
								setEmail(e.target.value)
							}}
							value={email}
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
							onChange={(e) => {
								setSubject(e.target.value)
							}}
							value={subject}
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
							value={message}
							onChange={(e) => {
								setMessage(e.target.value)
							}}
							name="message"
							id="message"
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="Feel free to Describe Your Requirements"
						/>
					</div>
					<button
						type="submit"
						className="bg-primary-500 hover:bg-primary-900 text-white font-medium py-2.5 px-5 rounded-lg w-full"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	)
}

export default EmailSection
