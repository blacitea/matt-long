import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
	return (
		<ul className="flex flex-col">
			<Link
				className="p-2 text-gray-800 hover:bg-gray-400 hover:text-white"
				to="/demo/videos"
			>
				{' '}
				Videos
			</Link>
			<Link
				className="p-2 text-gray-800 hover:bg-gray-400 hover:text-white"
				to="/demo/voice"
			>
				{' '}
				Voice
			</Link>
		</ul>
	);
};

export default Dropdown;
