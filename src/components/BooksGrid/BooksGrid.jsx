// BooksGrid.jsx

import React from 'react';
import BookCard from '../BookCard/BookCard.jsx'; 
import './BooksGrid.scss';

const BooksGrid = ({ books, onBookClick }) => {
  return (
    <div className="books-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onClick={() => onBookClick(book)} />
      ))}
    </div>
  );
};

export default BooksGrid;