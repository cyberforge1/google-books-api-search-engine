
import React, { useState } from 'react';
import { fetchBooks, fetchBookDetails } from './services/BooksService.js';
import BooksGrid from './components/BooksGrid.jsx';
import Header from './components/Header.jsx';
import SearchForm from './components/SearchForm.jsx';
import Modal from './components/Modal';
import './App.scss';

function App() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async (query) => {
    const fetchedBooks = await fetchBooks(query);
    setBooks(fetchedBooks);
  };

  const handlePaginationChange = (event) => {
    const newItemsPerPage = Number(event.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handleBookClick = async (book) => {
    try {
      const detailedBook = await fetchBookDetails(book.id);
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

  const handlePrevPage = () => setCurrentPage(prev => prev - 1);
  const handleNextPage = () => setCurrentPage(prev => prev + 1);

  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="App">
      <Header title="BookQuest - API Search Engine" />
      <SearchForm onSearch={handleSearch} />
      {books.length > 0 && (
        <>
          <div className="pagination-settings">
            <label htmlFor="pagination">Display books per page:</label>
            <select id="pagination" value={itemsPerPage} onChange={handlePaginationChange}>
              <option value="20">20 per page</option>
              <option value="40">40 per page</option>
            </select>
          </div>
          <BooksGrid books={currentBooks} onBookClick={handleBookClick} />
          <div className="pagination-controls">
            <button className="prev-button" disabled={currentPage === 1} onClick={handlePrevPage}>Prev</button>
            <button className="next-button" disabled={currentPage === Math.ceil(books.length / itemsPerPage)} onClick={handleNextPage}>Next</button>
          </div>
        </>
      )}
      <Modal show={isModalOpen} onClose={handleCloseModal} book={selectedBook} />
    </div>
  );
}

export default App;