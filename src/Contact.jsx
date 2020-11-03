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
		<section class="container">
			<Form
				id="contactForm"
				onSubmit={handleSubmit}
				class="bg-white shadow-md rounded p-4 mx-4"
			>
				<h2 className="title">Contact me</h2>
				<div className="name__container">
					<Form.Group className="name__field">
						<Form.Label>First Name</Form.Label>
						<Form.Control
							type="text"
							name="firstName"
							value={firstName}
							onChange={handleFirstName}
						/>
					</Form.Group>

					<FormGroup className="name__field">
						<Form.Label>Last Name</Form.Label>
						<Form.Control
							type="text"
							value={lastName}
							name="lastName"
							onChange={handleLastName}
						/>
					</FormGroup>
				</div>
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
						className="form-text"
					/>
				</FormGroup>

				<FormGroup>
					<Button
						variant="light"
						type="submit"
						className="hover:bg-gray-500 hover:text-white"
					>
						Submit
					</Button>
				</FormGroup>
			</Form>
		</section>
	);
};

export default Contact;
