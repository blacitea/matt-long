import React from 'react';

import img02 from './images/photography/02.JPG';
import img03 from './images/photography/03.JPG';
import img04 from './images/photography/04.JPG';
import img05 from './images/photography/05.JPG';
import img06 from './images/photography/06.JPG';
import img07 from './images/photography/07.JPG';

const Photography = () => {
	return (
		<div className="photography_container">
			<h2 className="mt-10 my-5 p-2 text-6xl font-black">Photography </h2>
			<ul className="photography--container">
				<li className="photography--item">
					<img src={img02} alt="profile pic" />
				</li>
				<li className="photography--item">
					<img src={img03} alt="profile pic" />
				</li>
				<li className="photography--item">
					<img src={img04} alt="profile pic" />
				</li>
				<li className="photography--item">
					<img src={img05} alt="profile pic" />
				</li>
				<li className="photography--item">
					<img src={img06} alt="profile pic" />
				</li>
				<li className="photography--item">
					<img src={img07} alt="profile pic" />
				</li>
			</ul>
		</div>
	);
};

export default Photography;
