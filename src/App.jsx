// App.jsx

import React, { useState } from 'react';
import { fetchBooks, fetchBookDetails } from './services/BooksService.js';
import BooksGrid from './components/BooksGrid.jsx';
import Header from './components/Header.jsx'; 
import SearchForm from './components/SearchForm.jsx'; 
import './App.scss';
import Modal from './components/Modal';



function App() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async (query) => {
    const books = await fetchBooks(query);
    setBooks(books);
    console.log(books);
  };

  const handlePaginationChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to the first page when items per page changes
  };

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

   // Calculating the number of pages and slicing the books for the current page
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
            <select
              id="pagination"
              value={itemsPerPage}
              onChange={(e) => handlePaginationChange(Number(e.target.value))}
            >
              <option value="40">40 per page</option>
              <option value="20">20 per page</option>
            </select>
          </div>
          <BooksGrid books={currentBooks} onBookClick={handleBookClick} />
          <div className="pagination-controls">
            <button className="prev-button" disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Prev</button>
            <button className="next-button" disabled={currentPage === Math.ceil(books.length / itemsPerPage)} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
          </div>
        </>
      )}
      <Modal show={isModalOpen} onClose={handleCloseModal} book={selectedBook} />
    </div>
  );
}

export default App;