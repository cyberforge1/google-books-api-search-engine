// BookCard.jsx
import React from 'react';
import './BookCard.scss'; // Path might need adjustment based on your project structure

// Inside BookCard.jsx
const BookCard = ({ book, onClick }) => {
  return (
    <div className="book-card" onClick={onClick}>
      <img src={book.image} alt={book.title} className="book-image" />
      <div className="card-content">
        <h3 className="card-title">{book.title}</h3>
        <p className="card-author">{book.author}</p>
        <p className="card-description">{book.description}</p>
      </div>
    </div>
  );
};


export default BookCard;