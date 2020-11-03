import React from 'react';
import ReactModal, { setAppElement } from 'react-modal';

import './Modal.scss';

const Modal = ({ isOpen, close, ...props }) => {
	setAppElement('#root');

	return (
		<ReactModal
			isOpen={isOpen}
			closeTimeoutMS={500}
			className="modal-container"
			overlayClassName="modal-overlay"
		>
			<span id="modal-close" className="modal-close" onClick={close}>
				<i class="fas fa-times"></i>
			</span>
			<section className="modal-content">
				{props.content}
				{props.children}
			</section>
		</ReactModal>
	);
};

export default Modal;
