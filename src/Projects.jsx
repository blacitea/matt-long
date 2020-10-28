import React from 'react';

const Projects = () => {
	return (
		<div className="projects--container">
			<h2 className="mt-10 my-5 p-2 text-6xl font-black">Directing </h2>
			<section className="m-2 p-2 border-solid border-2">
				<p className="my-3 text-2xl font-bold">immured</p>
				<iframe
					src="https://player.vimeo.com/video/402729485?color=8d93ab&byline=0"
					width="960"
					height="540"
					frameborder="0"
					allow="autoplay; fullscreen"
					allowfullscreen
					title="immured"
				></iframe>
			</section>
			<section className="m-2 p-2 border-solid border-2">
				<p className="my-3 text-2xl font-bold">Espioneige</p>
				<iframe
					width="960"
					height="686"
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
