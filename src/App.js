import React from 'react';
import './App.scss';
import Nav from './Nav';
import Previews from './Previews';

function App() {
	return (
		<div className="App">
			<header className="sidebar">
				<Nav />
			</header>
			<main className="main--container">
				<img
					className="main--image"
					src="https://uploadvan.castingworkbook.com/Photo/_LON/544572/86d61692-35eb-41cc-9ada-34da294c6791.jpg"
					alt="Matt Long"
				/>
				<Previews />
			</main>
		</div>
	);
}

export default App;
