import React from 'react';
import profilePic from './images/03.jpg';

const Bio = () => {
	return (
		<section className="flex flex-col items-center">
			<p className="text-2xl my-4 p-1">About Matt Long</p>
			<aside className="m-2 p-1 flex-1 max-w-sm mx=auto shadow">
				<img src={profilePic} alt="Matt" />
			</aside>
			<article className="m-2 mx-5 p-1 flex-1 text-left">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
				pellentesque erat, non aliquam lacus. Praesent vel risus eu lorem luctus
				pellentesque a et nisi. Phasellus in molestie massa. Etiam blandit,
				ligula at tempus pulvinar, ligula purus aliquet felis, non condimentum
				massa ex vel justo. Aliquam malesuada faucibus tortor. Pellentesque
				efficitur massa placerat sagittis elementum. Vestibulum ante ipsum
				primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam
				ipsum mi, commodo vitae erat sed, rhoncus tempus magna. Aenean commodo
				velit sit amet dictum semper. Morbi dolor mauris, luctus id arcu
				eleifend, finibus fermentum ante. Phasellus nisl nisl, consequat quis mi
				quis, aliquet mollis lacus. Morbi pretium ornare auctor. Integer varius
				lobortis rutrum. Donec a ex at mi tempor posuere et egestas enim. In
				tempus lobortis ex, eu semper arcu.
			</article>
		</section>
	);
};

export default Bio;
