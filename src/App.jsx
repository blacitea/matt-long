import React from 'react';
import './App.scss';
import Nav from './Nav';
import Previews from './Previews';
import Contact from './Contact';
import { Route, Switch } from 'react-router-dom';
import Bio from './Bio';
import Projects from './Projects';
import Demo from './Demo';
import Modeling from './Modeling';
import Photography from './Photography';

import Modal from './Modal';
import useModal from './hooks/useModal';

function App() {
	const { modalState, openModal, closeModal } = useModal();
	return (
		<div className="App flex flex-col md:flex-row">
			<Modal
				isOpen={modalState.open}
				close={closeModal}
				content={modalState.content}
			/>
			<header className="sidebar">
				<Nav />
			</header>
			<main className="main--container">
				<Switch>
					<Route path="/modeling">
						<Modeling openModal={openModal} />
					</Route>
					<Route path="/bio" component={Bio} />
					<Route path="/demo" component={Demo} />
					<Route path="/projects" component={Projects} />
					<Route path="/photography">
						<Photography openModal={openModal} />
					</Route>

					<Route path="/contact">
						<Contact openModal={openModal} />
					</Route>
					<Route path="/">
						<div className="container flex-row">
							<img
								className="main--image"
								src="https://uploadvan.castingworkbook.com/Photo/_LON/544572/86d61692-35eb-41cc-9ada-34da294c6791.jpg"
								alt="Matt Long"
							/>
							<Previews />
						</div>
					</Route>
				</Switch>
			</main>
			{/* <footer className="invisible md:visible md:h-40 md:flex-space-around">
				{' '}
				<a
					href="https://twitter.com/MattLongA88"
					target="_blank"
					rel="noopener noreferrer"
					alt="@MattLongA88"
				>
					<i className="fab fa-twitter-square"></i>
				</a>
				Matt Long
				<a
					href="https://www.instagram.com/official_mattlong/"
					target="_blank"
					rel="noopener noreferrer"
					alt="@official_mattlong"
				>
					<i className="fab fa-instagram"></i>
				</a>
			</footer> */}
		</div>
	);
}

export default App;
