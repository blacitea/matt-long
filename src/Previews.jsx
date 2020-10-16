import React from 'react';
import image2 from './images/02.jpg';
import image1 from './images/01.jpg';
const Previews = props => {
	return (
		<ul className="previews--container">
			<li className="previews--item">
				<img src={image2} alt="profile pic" />
			</li>
			<li className="previews--item">
				<img src={image1} alt="profile pic" />
			</li>
		</ul>
	);
};

export default Previews;
