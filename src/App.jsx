import React, { useState } from 'react';
import { fetchBooks } from './services/BooksService'; // Make sure the path matches your project structure
import BooksGrid from './components/BooksGrid.jsx';
import Header from './components/Header.jsx';
import SearchForm from './components/SearchForm.jsx';
import './App.scss'; // Assuming you have a global SCSS file for styles

function App() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    const books = await fetchBooks(query);
    setBooks(books);
  };

  return (
    <div className="App">
      <Header title="Google Books API Search Engine" />
      <SearchForm onSearch={handleSearch} />
      <BooksGrid books={books} />
    </div>
  );
}

export default App;