import React from 'react';

const Projects = () => {
	return (
		<div className="container">
			<h2 className="title">Directing </h2>
			<section className="iframe-box">
				<p className="my-3 text-2xl font-bold">immured</p>
				<iframe
					width="960"
					height="540"
					src="https://www.youtube.com/embed/HEH2BDDUEwM"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
					title="immured"
				></iframe>
			</section>
			<section className="iframe-box">
				<p className="my-3 text-2xl font-bold">Espioneige</p>
				<iframe
					width="960"
					height="540"
					src="https://www.youtube.com/embed/kTckcPpQJSg"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
					title="Espioneige"
				></iframe>
			</section>
		</div>
	);
};

export default Projects;
