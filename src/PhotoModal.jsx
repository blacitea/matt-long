import React from 'react';
import Modal from 'react-bootstrap/Modal';

const PhotoModal = ({ image }) => {
	return (
		<Modal size="lg" centered>
			<Modal.Header closeButton />
			<Modal.Body>Modal Testing</Modal.Body>
		</Modal>
	);
};

export default PhotoModal;
