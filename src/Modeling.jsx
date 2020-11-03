import React from 'react';

import { modelings } from './image';

const Modeling = ({ openModal }) => {
	const images = modelings;
	return (
		<div className="container">
			<h2 className="title">Modelling </h2>
			<ul className="modelling--container">
				{images.map(img => (
					<li
						className="modelling--item"
						onClick={() => {
							openModal(<img src={img} alt={`${img}`} />);
						}}
					>
						<img src={img} alt={`${img}`} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Modeling;
