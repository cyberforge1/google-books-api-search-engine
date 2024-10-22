// SearchForm.jsx

import React, { useState } from 'react';
import './SearchForm.scss';

const SearchForm = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    onSearch(inputValue); 
    setInputValue(''); 
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for books"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;

