// Modal.jsx
import React from 'react';
import './Modal.scss'; // Create and import your Modal.scss for styling

const Modal = ({ show, onClose, book }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button onClick={onClose}>Close</button>
        {book && (
          <div>
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;