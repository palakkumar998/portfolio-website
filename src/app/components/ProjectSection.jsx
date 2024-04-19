'use client'
import React, { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
const projectsData = [
	{
		id: 1,
		title: 'Its Essential Tech',
		description: 'Interactive Thumbnails Designing',
		image: '/images/projects/1.png',
		tag: ['All', 'Designing'],
		gitUrl: '/',
		previewUrl: 'https://youtube.com/@ItsEssentialTech?si=fzhkK6qv_uw2Tip2',
	},
	{
		id: 2,
		title: 'Karma Yogi',
		description: 'Yoga Teacher Instagram reels',
		image: '/images/projects/2.png',
		tag: ['All', 'Editing'],
		gitUrl: '/',
		previewUrl:
			'https://www.instagram.com/karma_yogiji?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
	},
	{
		id: 3,
		title: 'Ieva Simtniece',
		description: 'Talking Head Instagram reels',
		image: '/images/projects/3.png',
		tag: ['All', 'Editing'],
		gitUrl: '/',
		previewUrl:
			'https://www.instagram.com/ievayog?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
	},
	{
		id: 4,
		title: 'Ieva Yoga',
		description: 'Podcasts Editing',
		image: '/images/projects/4.png',
		tag: ['All', 'Editing'],
		gitUrl: '/',
		previewUrl: 'https://youtu.be/VHyEEIm64xU?si=AIBHHkYUVb89u_pq',
	},
	{
		id: 5,
		title: 'Rishikesh Yogakulam',
		description: 'Instagram Post Designing',
		image: '/images/projects/5.png',
		tag: ['All', 'Designing'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 6,
		title: 'Yoga With master D',
		description: 'Youtube Thumbnails Designing',
		image: '/images/projects/6.png',
		tag: ['All','Designing'],
		gitUrl: '/',
		previewUrl: '/',
	},
]

const ProjectSection = () => {
	const [tag, setTag] = useState('All')
	const ref = useRef(null)

	const handleTagChange = (newTag) => {
		setTag(newTag)
	}
	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	)

	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Clients Work
			</h2>
			{/*  section for category button  */}
			<div className="text-white flex flex-row justify-center items-center gap-4 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === 'All'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Editing"
					isSelected={tag === 'Editing'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Designing"
					isSelected={tag === 'Designing'}
				/>
			</div>
			{/*  section for category button  ends here */}
			<div className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project) => (
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
