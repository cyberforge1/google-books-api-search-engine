// SearchForm.js
import React, { useState } from 'react';
import './SearchForm.scss'; // Assuming you have a SCSS file for styles

const SearchForm = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    onSearch(inputValue); // Call the onSearch function passed as a prop with the input value
    setInputValue(''); // Reset the input value
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