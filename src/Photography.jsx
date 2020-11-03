import React from 'react';

import { photographies } from './image';

const Photography = () => {
	const images = photographies;
	return (
		<div className="container">
			<h2 className="title">Photography </h2>
			<ul className="photography--container">
				{images.map(img => (
					<li className="photography--item">
						<img src={img} alt={`${img}`} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Photography;
