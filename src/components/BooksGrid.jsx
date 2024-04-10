// BooksGrid.jsx
import React from 'react';
import BookCard from './BookCard'; // Adjust the path as necessary
import './BooksGrid.scss';

const BooksGrid = ({ books }) => {
  return (
    <div className="books-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} /> // Pass the whole book object to the BookCard component
      ))}
    </div>
  );
};

export default BooksGrid;