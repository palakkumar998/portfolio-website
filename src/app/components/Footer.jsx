import Image from 'next/image'
import React from 'react'
import logo from '/public/images/logo-dark.png'


const Footer = () => {
	return (
		<footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
			<div className="container p-12 flex justify-between">
			<Image
					src={logo}
					alt="logo-dark"
					width={70}
					height={70}
					className="invert mx-9"
				/>
				<p className="text-slate-600">All rights reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
