import React from 'react'
import Image from 'next/image'

const TestimonialCard = ({ title, text, image, name, role }) => {
	return (
		<figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
			<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
					{title}
				</h3>
				<p className="my-4">{text}</p>
			</blockquote>
			<figcaption className="flex items-center justify-center">
				<Image
					src={image}
					alt="profile picture"
					width={36} // 9 * 4 for width and height since it's in `w-9` and `h-9`
					height={36}
					className="rounded-full"
				/>
				<div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
					<div>{name}</div>
					<div className="text-sm text-gray-500 dark:text-gray-400">
						{role}
					</div>
				</div>
			</figcaption>
		</figure>
	)
}

const Testimonials = () => {
	// Add data for each testimonial
	const testimonials = [
		{
			title: 'Very easy this was to integrate',
			text: 'If you care for your time, I hands down would go with this.',
			image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png',
			name: 'Bonnie Green',
			role: 'Developer at Open AI',
		},
		{
			title: 'Solid foundation for any project',
			text: 'Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!',
			image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png',
			name: 'Roberta Casas',
			role: 'Lead designer at Dropbox',
		},
		{
			title: 'Mindblowing workflow',
			text: 'Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.',
			image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
			name: 'Jese Leos',
			role: 'Software Engineer at Facebook',
		},
		{
			title: 'Efficient Collaborating',
			text: 'You have many examples that can be used to create a fast prototype for your team.',
			image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png',
			name: 'Joseph McFall',
			role: 'CTO at Google',
		},
	]

	return (
		<div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
			{testimonials.map((testimonial, index) => (
				<TestimonialCard
					key={index}
					title={testimonial.title}
					text={testimonial.text}
					image={testimonial.image}
					name={testimonial.name}
					role={testimonial.role}
				/>
			))}
		</div>
	)
}

export default Testimonials
