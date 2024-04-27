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
			<ul className="list-disc gap-2 pl-2">
				<div>
					<button class="bg-primary-500 hover:bg-primary-700 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Story-telling
					</button>
					<button class="bg-primary-500 hover:bg-primary-700 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Color grading
					</button>
					<button class="bg-primary-500 hover:bg-primary-700 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Seamless Transitions
					</button>
					<button class="bg-primary-500 hover:bg-primary-700 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Visual story representation
					</button>
					<button class="bg-primary-500 hover:bg-primary-700 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Sound Desgining
					</button>
					<button class="bg-primary-500 hover:bg-primary-700 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Trailer, Intros, Outros
					</button>
					<button class="bg-primary-500 hover:bg-primary-700 text-white m-2  font-bold py-2 px-4 rounded-3xl">
						Typography
					</button>
					<button class="bg-primary-500 hover:bg-primary-700 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Color Scheme
					</button>
					<button class="bg-primary-500 hover:bg-primary-700 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Color thoery
					</button>
					<button class="bg-primary-500 hover:bg-primary-700 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Lighting Techniques
					</button>
				</div>
			</ul>
		),
	},
	{
		title: 'Formats',
		id: 'formats',
		content: (
			<ul className="list-disc pl-2">
				<div>
					<button class="border border-primary-500 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Short Form content
					</button>
					<button class="border border-primary-500 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Large Form Content
					</button>
					<button class="border border-primary-500 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Talking Head Videos
					</button>
					<button class="border border-primary-500 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Informative videos
					</button>

					<button class="border border-primary-500 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Vlogs
					</button>

					<button class="border border-primary-500 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Podcasts
					</button>

					<button class="border border-primary-500 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Corporate Videos
					</button>
					<button class="border border-primary-500 text-white m-2 font-bold py-2 px-4 rounded-3xl">
						Fitness & Yoga tutorials
					</button>
				</div>
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
						alt="youtube"
						width={90}
						height={90}
						className="transition-transform duration-300 hover:scale-110"
					/>

					<Image
						src={insta}
						alt="instagram"
						width={90}
						height={90}
						className="transition-transform duration-300 hover:scale-110"
					/>
					<Image
						src={li}
						alt="linkedin"
						width={80}
						height={90}
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
						With over 4 years of experience in video editing and
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
