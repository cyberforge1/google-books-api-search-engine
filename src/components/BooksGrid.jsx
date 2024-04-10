// BooksGrid.js
import React from 'react';
import './BooksGrid.scss'; // Make sure to create a corresponding SCSS file for styles

const BooksGrid = ({ books }) => {
  return (
    <div className="books-grid">
      {books.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.title} className="book-image"/>
          <div className="book-info">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <p className="book-description">{book.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksGrid;