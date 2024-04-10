// BookCard.jsx
import React from 'react';
import './BookCard.scss'; // Path might need adjustment based on your project structure

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />
      <div className="card-content"> {/* This was previously "book-info" */}
        <h3 className="card-title">{book.title}</h3> {/* Matches CSS */}
        <p className="card-author">{book.author}</p> {/* Matches CSS */}
        <p className="card-description">{book.description}</p> {/* Matches CSS */}
      </div>
    </div>
  );
};

export default BookCard;