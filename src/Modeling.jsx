import React from 'react';

import { modelings } from './image';

const Modeling = () => {
	const images = modelings;
	return (
		<div className="container">
			<h2 className="title">Modelling </h2>
			<ul className="modelling--container">
				{images.map(img => (
					<li className="modelling--item">
						<img src={img} alt={`${img}`} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Modeling;
