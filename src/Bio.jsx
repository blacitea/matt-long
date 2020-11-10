import React from 'react';
import profilePic from './images/03.jpg';

const Bio = () => {
	return (
		<section className="container bio-flex">
			<article className="about-me">
				<h2 className="title">About Matt Long</h2>
				<p>
					Matt Long is a Canadian filmmaker, actor, and model based in Toronto.
					In his personal work, Matt enjoys crafting stories that deal with the
					subject of mental health, paranoia, and the physicality of being.
				</p>
				<p>
					{' '}
					Matt was first brought into an action film by his teammate Kyle Wong
					who was in charge of the Choreography for the film The Grid (2016).
					Here Matt put his great understanding of body and motion carefully
					crafted from his years of Wushu competitions and coaching to good use.
					He was hooked and has since sought out every opportunity to continue
					his exploration of physicality in The Line (2018), and The Crow:
					Rebirth (2017).
				</p>{' '}
				<p>
					{' '}
					Matt is working towards bringing his own unique physicality to
					dramatic films where he is looking to play a role where he could
					explore the different faces of emotionally varied characters in
					different social settings.
				</p>
			</article>
			<section className="bio-image">
				<aside className="m-2 p-1 flex-1 max-w-sm mx=auto shadow">
					<img src={profilePic} alt="Matt" />
				</aside>
			</section>
		</section>
	);
};

export default Bio;
