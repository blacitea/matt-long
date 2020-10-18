import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormGroup } from 'react-bootstrap';

const Contact = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const handleFirstName = event => {
		console.log(event.target.value);
		setFirstName(event.target.value);
	};

	const handleLastName = event => setLastName(event.target.value);
	const handleEmail = event => setEmail(event.target.value);
	const handleSubject = event => setSubject(event.target.value);
	const handleMessage = event => setMessage(event.target.value);

	const handleSubmit = event => {
		event.preventDefault();
		window.emailjs
			.sendForm('service_7q8iz5w', 'template_krmuget', '#contactForm')
			.then(resolve => alert(`success! ${resolve.status}, ${resolve.text}`));
	};

	return (
		<section class="w-2/5 ">
			<Form
				id="contactForm"
				onSubmit={handleSubmit}
				class="bg-white shadow-md rounded p-4 mx-4"
			>
				<h1>Get in touch</h1>
				<Form.Group controlId="formFirstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="text"
						name="firstName"
						value={firstName}
						onChange={handleFirstName}
					/>
				</Form.Group>

				<FormGroup>
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						value={lastName}
						name="lastName"
						onChange={handleLastName}
					/>
				</FormGroup>

				<FormGroup>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="text"
						value={email}
						name="email"
						onChange={handleEmail}
					/>
				</FormGroup>

				<FormGroup>
					<Form.Label>Subject</Form.Label>
					<Form.Control
						type="text"
						value={subject}
						name="subject"
						onChange={handleSubject}
					/>
				</FormGroup>

				<FormGroup>
					<Form.Label>Message</Form.Label>
					<Form.Control
						as="textarea"
						value={message}
						name="message"
						onChange={handleMessage}
					/>
				</FormGroup>

				<FormGroup>
					<Button variant="light" type="submit">
						Submit
					</Button>
				</FormGroup>
			</Form>
		</section>
	);
};

export default Contact;
