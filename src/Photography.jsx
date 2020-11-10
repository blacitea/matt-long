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
							openModal(
								<img
									className="img-responsive"
									src={img}
									alt={`${img}`}
									height
								/>
							);
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
