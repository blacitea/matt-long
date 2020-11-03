import React from 'react';

const Projects = () => {
	return (
		<div className="container">
			<h2 className="title">Directing </h2>
			<section className="iframe-box">
				<p className="my-3 text-2xl font-bold">immured</p>
				<iframe
					src="https://player.vimeo.com/video/402729485?color=8d93ab&byline=0"
					width="480"
					height="280"
					frameborder="0"
					allow="autoplay; fullscreen"
					allowfullscreen
					title="immured"
				></iframe>
			</section>
			<section className="iframe-box">
				<p className="my-3 text-2xl font-bold">Espioneige</p>
				<iframe
					width="480"
					height="343"
					src="https://www.youtube.com/embed/kTckcPpQJSg"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					title="Espioneige"
				></iframe>
			</section>
		</div>
	);
};

export default Projects;
