// BooksGrid.jsx
import React from 'react';
import BookCard from '../BookCard/BookCard.jsx'; 
import './BooksGrid.scss';

const BooksGrid = ({ books, onBookClick, isLoading }) => {
  if (isLoading) {
    return (
      <div className="books-grid-loading">
        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="books-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onClick={() => onBookClick(book.id)} />
      ))}
    </div>
  );
};

export default BooksGrid;
