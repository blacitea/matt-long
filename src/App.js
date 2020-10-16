import React from 'react';
import './App.scss';
import Nav from './Nav';
import Previews from './Previews';
import Contact from './Contact';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<header className="sidebar">
				<Nav />
			</header>
			<main className="main--container">
				<Route path="/">
					<img
						className="main--image"
						src="https://uploadvan.castingworkbook.com/Photo/_LON/544572/86d61692-35eb-41cc-9ada-34da294c6791.jpg"
						alt="Matt Long"
					/>
					<Previews />
				</Route>
				<Route path="/bio" />
				<Route path="/video" />
				<Route path="/voice" />
				<Route path="/contact" component={Contact} />
			</main>
		</div>
	);
}

export default App;
