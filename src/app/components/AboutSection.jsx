'use client'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import AboutPhoto from '/public/images/Aboutus.JPG'
import TabButton from './TabButton'

const AboutSection = () => {
	const [tab, setTab] = useState('skills')
	const [startTransition, isPending] = useTransition()

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id)
		})
	}
	return (
		<section className="text-white " id="about">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image src={AboutPhoto} alt="image" width={600} height={600} />
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h1 className="text-4xl font-bold text-white mb-4">
						about me
					</h1>
					<p className="text-base lg:text-lg">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Aliquam itaque doloribus harum reiciendis cumque
						blanditiis nam molestiae assumenda ipsam vero quasi
						vitae accusamus quo recusandae, sint dignissimos eveniet
						temporibus! Dolor!
					</p>
					<div className="flex flex-row mt-8">
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}
						>Skills</TabButton>
						<span className="mr-3 font-semibold hover:text-white text-violet-500 border-blue-600">
							Skills
						</span>
						<span className="">Education</span>
						<span className="">Experience</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
