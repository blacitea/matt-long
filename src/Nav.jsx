import React from 'react';

const Nav = props => {
	return (
		<nav>
			<h1 className="nav--title">Matt Long</h1>
			<ul className="nav--menu">
				<li>Bio</li>
				<li>DEMO</li>
				<li>Videos</li>
				<li>Voice</li>
				<li>Contact</li>
			</ul>
			<ul className="nav--footer">
				<i class="fab fa-twitter-square"></i>
				<i class="fab fa-facebook-square"></i>
				<i class="fab fa-instagram"></i>
			</ul>
		</nav>
	);
};

export default Nav;
