// Modal.jsx
import React, { useRef, useEffect } from 'react';
import ModalBody from './ModalBody'; // Adjust the path as necessary
import './Modal.scss'; // Ensure your styles are correctly imported

const Modal = ({ show, onClose, book }) => {
    const modalRef = useRef(); // Create a ref for the modal element

    const handleClose = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose(); // Close the modal if the click is outside the modal content
      }
    };

    useEffect(() => {
      // Add when the component mounts
      document.addEventListener('mousedown', handleClose);
      // Cleanup on component unmount
      return () => {
        document.removeEventListener('mousedown', handleClose);
      };
    }, []); // The empty dependency array means this effect runs once on mount and cleanup on unmount

    if (!show) {
      return null;
    }

    return (
      <div className="modal-backdrop">
        <div className="modal" ref={modalRef}> {/* Attach the ref here */}
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