'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import  Aboutus  from '/public/images/Aboutus.jpg'

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className="list-disc pl-2">
				<li>Story-telling</li>
				<li>Color grading</li>
				<li>Seamless Transitions</li>
				<li>Motion Graphics</li>
				<li>Visual story representation</li>
				<li>Sound Desgining</li>
				<li>Trailer / Intros / Outros</li>
				<li>Typography</li>
				<li>Color Schemes</li>
				<li>Color thoery</li>
				<li>Lighting Techniques</li>
			</ul>
		),
	},
	{
		title: 'Formats',
		id: 'formats',
		content: (
			<ul className="list-disc pl-2">
				<li>Short Form content</li>
				<li>Large Form Content</li>
				<li>Talking Head Videos</li>
				<li>Informative videos</li>
				<li>Vlogs</li>
				<li>Podcasts</li>
				<li>Corporate Videos</li>
				<li>Fitness & Yoga tutorials</li>
			</ul>
		),
	},
	{
		title: 'Platforms',
		id: 'platforms',
		content: (
			<ul className="list-disc pl-2">
				<li>YouTube</li>
				<li>Instagram</li>
				<li>LinkedIn</li>
			</ul>
		),
	},
	{
		title: 'Tools',
		id: 'tools & technologies',
		content: (
			<ul className="list-disc pl-2">
				<li>Davinci Resolve</li>
				<li>AdobePremire Pro</li>
				<li>Adobe After Effects</li>
				<li>Adobe Illustrator</li>
				<li>Corel Draw</li>
			</ul>
		),
	},
]

const AboutSection = () => {
	const [tab, setTab] = useState('skills')
	const [isPending, startTransition] = useTransition()

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id)
		})
	}

	return (
		<section className="text-white" id="about">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image src={Aboutus} alt="image" width={500} height={500} />
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">
						About Me
					</h2>
					<p className="text-base lg:text-lg">
						With over 3 years of experience in video editing and
						content creation, I've honed my ability to produce
						engaging YouTube videos, Instagram reels, posts, and
						flyers. My strong technical foundation, backed by a
						B.Tech degree in Computer Science and Engineering from
						Uttarakhand Technical University, allows me to bring a
						unique blend of creativity and precision to my projects.
						My passion for storytelling enables me to craft
						compelling narratives that captivate audiences and leave
						a lasting impression. I strive to create visually
						appealing and impactful content that resonates with
						viewers.
					</p>
					<div className="flex flex-row justify-start mt-8">
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}
						>
							{' '}
							Skills{' '}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('formats')}
							active={tab === 'formats'}
						>
							{' '}
							Formats{' '}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('platforms')}
							active={tab === 'platforms'}
						>
							{' '}
							Platforms{' '}
						</TabButton>
						<TabButton
							selectTab={() =>
								handleTabChange('tools & technologies')
							}
							active={tab === 'tools & technologies'}
						>
							{' '}
							Tools{' '}
						</TabButton>
					</div>
					<div className="mt-8">
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
