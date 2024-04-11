import React, { useState } from 'react';
import { fetchBooks, fetchBookDetails } from './services/BooksService.js';
import BooksGrid from './components/BooksGrid.jsx';
import Header from './components/Header.jsx'; 
import SearchForm from './components/SearchForm.jsx'; 
import './App.scss';
import Modal from './components/Modal';



function App() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    const books = await fetchBooks(query);
    setBooks(books);
    console.log(books);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = async (book) => {
    try {
      const detailedBook = await fetchBookDetails(book.id);
      console.log(detailedBook);
      setSelectedBook(detailedBook);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Failed to fetch book details:', error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <Header title="BookQuest - API Search Engine" />
      <SearchForm onSearch={handleSearch} />
      <BooksGrid books={books} onBookClick={handleBookClick} />
      <Modal show={isModalOpen} onClose={handleCloseModal} book={selectedBook} />
    </div>
  );
}

export default App;