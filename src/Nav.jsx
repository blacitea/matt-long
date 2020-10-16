import React from 'react';
import { Link, withRouter } from 'react-router-dom';
const Nav = props => {
	return (
		<nav>
			<Link to="/">
				<h1 className="nav--title">Matt Long</h1>
			</Link>
			<ul className="nav--menu">
				<Link to="/bio">
					<li>Bio</li>
				</Link>
				<li>DEMO</li>
				<Link to="/demo/videos">
					{' '}
					<li>Videos</li>
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
				<i className="fab fa-twitter-square"></i>
				<i className="fab fa-facebook-square"></i>
				<i className="fab fa-instagram"></i>
			</ul>
		</nav>
	);
};

export default withRouter(Nav);
