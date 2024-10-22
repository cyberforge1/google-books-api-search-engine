// SearchResultsPage.jsx

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BooksGrid from '../BooksGrid/BooksGrid.jsx';
import { fetchBooks } from '../..services/BooksService';

const SearchResultsPage = () => {
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const query = location.state?.query;

  useEffect(() => {
    if (query) {
      fetchBooks(query).then((fetchedBooks) => {
        if (fetchedBooks.length === 0) {
          alert('No books found that match your search.');
        }
        setBooks(fetchedBooks);
      });
    }
  }, [query]);

  return (
    <div className="search-results-page">
      {books.length > 0 ? (
        <BooksGrid books={books} />
      ) : (
        <p>No books found. Try a different search!</p>
      )}
    </div>
  );
};

export default SearchResultsPage;