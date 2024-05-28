import { Arrow } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/arrow.css';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import { projCatAnim } from '../Projects.anim';

export default function ProjectsSlider({ category, data }) {
	const [getElement, setGetElement] = useState(null);
	const ref = useRef(null);

	useEffect(() => {
		setGetElement(ref.current);
	}, []);

	return (
		<motion.div variants={projCatAnim} style={{ position: 'relative' }}>
			<h1>{category}</h1>
			<div className='carouselContainer' ref={ref}>
				<Flicking
					inputType={[]}
					preventClickOnDrag={true}
					moveType='snap'
					circularFallback='bound'
					align={'center'}
					autoResize= {true}
					deceleration={0.02}
					circular={true}
					
					renderOnlyVisible={true}
					plugins={[
						new Arrow({
							parentEl: getElement,
						})
					]}
				>
					{data
						.sort((a, d) => (a.date > d.date ? -1 : 1))
						.map(({ name, cover, links }) => {
							return (
								<div key={name} className='slide'>
									<img src={cover} alt='cover' />
									<div className='links'>
										{links.map(({ link, icon }) => (
											<a key={link} href={link} style={{ backgroundImage: `url("${icon}")` }}>
												link
											</a>
										))}
									</div>
									<p>{name}</p>
								</div>
							);
						})}
						<ViewportSlot >
						<span className='flicking-arrow-prev custom-arrow'></span>
				        <span className='flicking-arrow-next custom-arrow'></span>
						</ViewportSlot>
				</Flicking>
				
			</div>
		</motion.div>
	);
}
