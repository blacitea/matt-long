import React from 'react';
import { Link, withRouter } from 'react-router-dom';
const Nav = props => {
	return (
		<nav>
			<h1 className="nav--title">Matt Long</h1>
			<ul className="nav--menu">
				<Link to="/bio">
					<li>Bio</li>
				</Link>
				<li>DEMO</li>
				<Link>
					{' '}
					<li to="/demo/videos">Videos</li>
				</Link>
				<Link to="/demo/voice">
					{' '}
					<li>Voice</li>
				</Link>
				<Link to="/contact">
					{' '}
					<li>Contact</li>
				</Link>
			</ul>
			<ul className="nav--footer">
				<i class="fab fa-twitter-square"></i>
				<i class="fab fa-facebook-square"></i>
				<i class="fab fa-instagram"></i>
			</ul>
		</nav>
	);
};

export default withRouter(Nav);
