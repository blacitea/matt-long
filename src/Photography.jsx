import React from 'react';

import { photographies } from './image';

const Photography = ({ openModal }) => {
	const images = photographies;
	return (
		<div className="container">
			<h2 className="title">Photography </h2>
			<ul className="photography--container">
				{images.map(img => (
					<li
						className="photography--item"
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

export default Photography;
