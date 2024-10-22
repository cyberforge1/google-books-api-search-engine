// BooksContainer.jsx
import React, { useState, useEffect } from 'react';
import BooksGrid from '../BooksGrid/BooksGrid.jsx';
import { fetchBooks } from '../../services/BooksService';

const BooksContainer = ({ query }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks(query).then(setBooks);
  }, [query]);

  return <BooksGrid books={books} onBookClick={handleBookClick} />;
};

export default BooksContainer;
