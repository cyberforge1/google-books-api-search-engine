// SearchResultsPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchBooks } from '../services/BooksService';
import BooksGrid from './BooksGrid';

const SearchResultsPage = () => {
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const query = location.state?.query;

  useEffect(() => {
    if (query) {
      fetchBooks(query).then(setBooks);
    }
  }, [query]);

  return (
    <div className="search-results-page">
      <BooksGrid books={books} />
    </div>
  );
};

export default SearchResultsPage;