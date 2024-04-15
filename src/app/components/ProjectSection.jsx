'use client'
import React from 'react'
import ProjectCard from './ProjectCard'
const projectsData = [
	{
		id: 1,
		title: 'Its Essential Tech',
		description: 'Project 1 description',
		image: '/images/projects/1.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: 'https://youtube.com/@ItsEssentialTech?si=fzhkK6qv_uw2Tip2',
	},
	{
		id: 2,
		title: 'Karma Yogi',
		description: 'Project 2 description',
		image: '/images/projects/2.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: 'https://www.instagram.com/karma_yogiji?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
	},
	{
		id: 3,
		title: 'Ieva Simtniece',
		description: 'Project 3 description',
		image: '/images/projects/3.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: 'https://www.instagram.com/ievayog?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
	},
	{
		id: 3,
		title: 'Podcasts',
		description: 'Youtube channel',
		image: '/images/projects/4.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: 'https://youtu.be/VHyEEIm64xU?si=AIBHHkYUVb89u_pq',
	},
	{
		id: 3,
		title: 'Rishikesh Yogakulam',
		description: 'InstaGram',
		image: '/images/projects/5.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 3,
		title: 'Yoga With master D',
		description: 'InstaGram',
		image: '/images/projects/6.png',
		tag: ['All', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
]

const ProjectSection = () => {
	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				See my Work
			</h2>
			<div className="grid md:grid-cols-3 gap-8 md:gap-12">
				{projectsData.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgUrl={project.image}
						gitUrl={project.gitUrl}
						previewUrl={project.previewUrl}
					/>
				))}
			</div>
		</section>
	)
}

export default ProjectSection
