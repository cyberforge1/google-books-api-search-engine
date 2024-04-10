import React, { useState } from 'react';
import { fetchBooks } from './services/BooksService'; // Adjust the path as necessary
import BooksGrid from './components/BooksGrid.jsx'; // Adjust the path as necessary
import Header from './components/Header.jsx'; // Adjust the path as necessary
import SearchForm from './components/SearchForm.jsx'; // Adjust the path as necessary
import './App.scss'; // Adjust the path as necessary

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