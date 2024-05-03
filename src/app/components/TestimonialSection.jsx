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
			'	 As a YouTuber and tech influencer with the channel Its Essential Tech,I needed captivating content to engage my audience. his expertise brought my videos to life with seamless editing and eye-catching thumbnails. Their attention to detail and creative touch truly elevated my channel. I highly recommend Palak Kumar for anyone looking to enhance their YouTube presence.',
		image: '/images/clients/client-3.png',
	},
	{
		id: 2,
		title: 'Pradeep Ji',
		field: 'Founder - Vinyasa Yoga, Yoga Teacher',
		description:
			'	"Palak Kumars video editing is great! As a yoga teacher on Instagram (@KarmaYogi), I needed standout content. Palak delivered brilliantly, making my teachings shine. Highly recommend!',
		image: '/images/clients/client-2.png',
	},
	{
		id: 3,
		title: 'Ieva Ji',
		field: 'Social Media Influncer, Yoga Teacher',
		description:
			'his video editing services are phenomenal! As a yoga teacher, I needed my videos to reflect peace and professionalism. Palak understood my vision perfectly and transformed my footage into stunning, captivating content. Their attention to detail and creative touch made my videos stand out. Working with Palak was a breeze and I could not be happier with the results',
		image: '/images/clients/client-1.png',
	},
	{
		id: 4,
		title: 'Click Kar',
		field: 'Photography & Video Editing',
		description:
			'video editing is outstanding! Being the owner of Click Kar Studio in Rishikesh, I needed my content to stand out. Palak s expertise brought my studio to life with stunning visuals. Highly recommended',
		image: '/images/clients/client-4.png',
	},
	{
		id: 5,
		title: 'RS Agarbatti',
		field: 'Incense Sticks Manufacturer, Mumbai',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis dolores, facilis eum ipsum, rem reiciendis, eius dolorum voluptates at earum suscipit autem aliquid! Totam, eligendi. Excepturi repudiandae explicabo voluptatem.',
		image: '/images/clients/client-5.png',
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
