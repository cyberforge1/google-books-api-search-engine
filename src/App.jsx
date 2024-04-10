import React, { useState } from 'react';
import { fetchBooks, fetchBookDetails } from './services/BooksService.js'; // Adjust the path as necessary
import BooksGrid from './components/BooksGrid.jsx'; // Adjust the path as necessary
import Header from './components/Header.jsx'; // Adjust the path as necessary
import SearchForm from './components/SearchForm.jsx'; // Adjust the path as necessary
import './App.scss'; // Adjust the path as necessary
import Modal from './components/Modal';



function App() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    const books = await fetchBooks(query);
    setBooks(books);
    console.log(books); // Log the fetched book details to the console
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = async (book) => {
    try {
      const detailedBook = await fetchBookDetails(book.id); // Fetch detailed information
      console.log(detailedBook); // Log the fetched book details to the console
      setSelectedBook(detailedBook); // Use detailed book information for the modal
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
      <Header title="Google Books API Search Engine" />
      <SearchForm onSearch={handleSearch} />
      <BooksGrid books={books} onBookClick={handleBookClick} />
      <Modal show={isModalOpen} onClose={handleCloseModal} book={selectedBook} />
    </div>
  );
}

export default App;