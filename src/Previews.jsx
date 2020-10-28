import React from 'react';
import image2 from './images/02.jpg';
import image1 from './images/01.jpg';
const Previews = props => {
	return (
		<ul className="previews--container">
			<li className="previews--item">
				<img src={image2} alt="profile pic" />
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
			</li>
			<li className="previews--item">
				<img src={image1} alt="profile pic" />
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
			</li>
			{/* <li className="previews--item">
				<img src={image2} alt="profile pic" />
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
			</li>
			<li className="previews--item">
				<img src={image1} alt="profile pic" />
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
			</li>
			<li className="previews--item">
				<img src={image2} alt="profile pic" />
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
			</li>
			<li className="previews--item">
				<img src={image1} alt="profile pic" />
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
			</li> */}
		</ul>
	);
};

export default Previews;
