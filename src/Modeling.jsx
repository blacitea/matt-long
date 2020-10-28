import React, { useState } from 'react';
import PhotoModal from './PhotoModal';

import halfBody from './images/modeling/01.JPG';
import headShot from './images/modeling/02.JPG';

const Modeling = () => {
	const [modalShow, setModalShow] = useState(false);
	return (
		<div className="modelling_container">
			<h2 className="mt-10 my-5 p-2 text-6xl font-black">Modelling </h2>
			<ul className="modelling--container">
				<li className="modelling--item">
					<img src={halfBody} alt="half body" />
				</li>
				<li className="modelling--item">
					<img src={halfBody} alt="half body" />
				</li>
				<li className="modelling--item">
					<img src={halfBody} alt="half body" />
				</li>
				<li className="modelling--item">
					<img src={headShot} alt="head shot" />
					<button
						onClick={() => {
							alert('clicked!');
							setModalShow(true);
						}}
					>
						Open Modal
					</button>
					<PhotoModal
						show={modalShow}
						onHide={() => setModalShow(false)}
						image={'Is this working?'}
						// image={<img src={halfBody} alt="half body" />}
					/>
				</li>
			</ul>
		</div>
	);
};

export default Modeling;
