// BookCard.jsx


import React from 'react';
import './BookCard.scss'; 


const BookCard = ({ book, onClick }) => {
  return (
    <div className="book-card" onClick={() => onClick(book.id)}>
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