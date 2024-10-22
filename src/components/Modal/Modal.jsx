// Modal.jsx
import React, { useRef, useEffect } from 'react';
import ModalBody from '../ModalBody/ModalBody';
import './Modal.scss';

const Modal = ({ show, onClose, book }) => {
    const modalRef = useRef();

    const handleClose = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };
    

    useEffect(() => {
        document.addEventListener('mousedown', handleClose);
        return () => {
            document.removeEventListener('mousedown', handleClose);
        };
    }, []);

    if (!show || !book) {
        return null;
    }

    // Inside Modal component
    console.log("Book in Modal:", book);

    return (
        <div className="modal-backdrop">
            <div className="modal" ref={modalRef}>
                <div className="modal-header">
                    <h5 className="modal-title">{book.title}</h5>
                    <button type="button" className="close-button" onClick={onClose}>×</button>
                </div>
                <ModalBody book={book} />
            </div>
        </div>
    );
};

export default Modal;
