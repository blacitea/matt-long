import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Nav = props => {
	return (
		<nav>
			<Link to="/">
				<h1 className="nav--title mt-10 py-2">MATT LONG</h1>
			</Link>
			<ul className="nav--menu">
				<Link to="/bio">
					<li>Bio</li>
				</Link>
				<Link to="/demo">
					{' '}
					<li>Demo</li>
				</Link>
				<Link to="/modeling">
					{' '}
					<li>Modelling</li>
				</Link>
				<Link to="/photography">
					{' '}
					<li>Photography</li>
				</Link>
				<Link to="/projects">
					{' '}
					<li>Projects</li>
				</Link>
				<Link to="/contact">
					{' '}
					<li>Contact</li>
				</Link>
			</ul>
			<ul className="nav--footer">
				<a
					href="https://twitter.com/MattLongA88"
					target="_blank"
					rel="noopener noreferrer"
					alt="@MattLongA88"
				>
					<i className="fab fa-twitter-square"></i>
				</a>
				<a
					href="https://www.instagram.com/official_mattlong/"
					target="_blank"
					rel="noopener noreferrer"
					alt="@official_mattlong"
				>
					<i className="fab fa-instagram"></i>
				</a>
			</ul>
		</nav>
	);
};

export default withRouter(Nav);
