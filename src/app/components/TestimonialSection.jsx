'use client'
import React, { useRef } from 'react'
import TestimonialCard from './TestimonialCard '
import { motion, useInView } from 'framer-motion'

const clientsData = [
	{
		id: 1,
		title: 'Yogesh Bhatt',
		field: 'Digital Content Creator, Teach Influncer',
		description:
			'	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, cum? Consectetur vel temporibus eveniet pariatur error porro illum numquam non consequatur? Nostrum consectetur consequatur mollitia molestias ad ipsam enim? Et?',
		image: '/images/clients/client-3.png',
	},
	{
		id: 2,
		title: 'Pradeep Ji',
		field: 'Founder - Vinyasa Yoga, Yoga Teacher',
		description:
			'	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, cum? Consectetur vel temporibus eveniet pariatur error porro illum numquam non consequatur? Nostrum consectetur consequatur mollitia molestias ad ipsam enim? Et?',
		image: '/images/clients/client-2.png',
	},
	{
		id: 3,
		title: 'Ieva Ji',
		field: 'Social Media Influncer, Yoga Teacher',
		description:
			'	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, cum? Consectetur vel temporibus eveniet pariatur error porro illum numquam non consequatur? Nostrum consectetur consequatur mollitia molestias ad ipsam enim? Et?',
		image: '/images/clients/client-1.png',
	},
	{
		id: 4,
		title: 'Click Kar',
		field: 'Photography & Video Editing',
		description:
			'	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, cum? Consectetur vel temporibus eveniet pariatur error porro illum numquam non consequatur? Nostrum consectetur consequatur mollitia molestias ad ipsam enim? Et?',
		image: '/images/clients/client-4.png',
	},
]
const TestimonialSection = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	}
	return (
		<section id="testimonials">
			<h2 className="text-center text-4xl font-bold text-white mt-9 mb-8 md:mb-12">
				Testimonials
			</h2>
			<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
				{clientsData.map((client, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? 'animate' : 'initial'}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<TestimonialCard
							key={client.id}
							title={client.title}
							field={client.field}
							description={client.description}
							imgUrl={client.image}
							star={client.star}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	)
}

export default TestimonialSection
