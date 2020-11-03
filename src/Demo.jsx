import React from 'react';

const Demo = () => {
	return (
		<div className="container">
			<h2 className="title">Demo</h2>
			<section id="iframe-box">
				<iframe
					src="https://player.vimeo.com/video/463256332?color=8d93ab&byline=0&portrait=0"
					width="640"
					height="457"
					frameborder="0"
					allow="autoplay; fullscreen"
					allowfullscreen
					title="Matt Long Demo Reel"
				></iframe>
			</section>
			<section id="voice-demo"></section>
		</div>
	);
};

export default Demo;
