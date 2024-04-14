'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import Aboutus from '/public/images/Aboutus.jpg'
import dr from '/public/images/logo/1.png'
import pr from '/public/images/logo/2.png'
import ae from '/public/images/logo/3.png'
import ps from '/public/images/logo/4.png'
import ai from '/public/images/logo/5.png'
import cd from '/public/images/logo/6.png'
import yt from '/public/images/logo/7.png'
import li from '/public/images/logo/8.png'
import insta from '/public/images/logo/9.png'

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
				<div className="flex mb-2 py-3 gap-6 items-center">
					<Image
						src={yt}
						alt="davinci"
						width={60}
						height={60}
						className="transition-transform duration-300 hover:scale-110"
					/>
					<Image
						src={li}
						alt="davinci"
						width={50}
						height={50}
						className="transition-transform duration-300 hover:scale-110"
					/>
					<Image
						src={insta}
						alt="davinci"
						width={50}
						height={50}
						className="transition-transform duration-300 hover:scale-110"
					/>
				</div>
			</ul>
		),
	},
	{
		title: 'Tools',
		id: 'tools & technologies',
		content: (
			<ul className="list-disc grid-cols-2 pl-2">
				<div className="flex mb-2 py-3 gap-3 items-center">
					<Image
						src={dr}
						alt="davinci"
						width={80}
						height={80}
						className="transition-transform duration-300 hover:scale-110"
					/>
					<Image
						src={pr}
						alt="premire"
						width={80}
						height={80}
						className="transition-transform duration-300 hover:scale-110"
					/>
					<Image
						src={ae}
						alt="after effects"
						width={80}
						height={80}
						className="transition-transform duration-300 hover:scale-110"
					/>
					<Image
						src={ps}
						alt="photoshop"
						width={80}
						height={80}
						className="transition-transform duration-300 hover:scale-110"
					/>
					<Image
						src={ai}
						alt="illustrator"
						width={80}
						height={80}
						className="transition-transform duration-300 hover:scale-110"
					/>
					<Image
						src={cd}
						alt="corel draw"
						width={60}
						height={60}
						className="transition-transform duration-300 hover:scale-110"
					/>
				</div>
				{/* <li>Davinci Resolve</li>
				<li>AdobePremire Pro</li>
				<li>Adobe After Effects</li>
				<li>Adobe Illustrator</li>
				<li>Corel Draw</li> */}
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
				<Image
					src={Aboutus}
					alt="image"
					width={600}
					height={600}
					className="rounded-xl spotlight"
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">
						About Me
					</h2>
					<p className="text-base lg:text-lg">
						With over 3 years of experience in video editing and
						content creation, I have honed my ability to produce
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
