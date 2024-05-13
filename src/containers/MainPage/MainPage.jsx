import React, { useState } from 'react';
import { fetchBooks, fetchBookDetails } from '../../services/BooksService';
import BooksGrid from '../../components/BooksGrid/BooksGrid';
import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import Modal from '../../components/Modal/Modal';
import Pagination from '../../components/Pagination/Pagination';
import Settings from '../../components/Settings/Settings';

const MainPage = () => {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBookId, setSelectedBookId] = useState(null);

    const handleSearch = async (query) => {
        const fetchedBooks = await fetchBooks(query);
        setBooks(fetchedBooks);
        setCurrentPage(1); // Reset to first page with new results
    };

    const handlePaginationChange = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const handleBookClick = async (bookId) => {
        try {
            const bookDetails = await fetchBookDetails(bookId);
            setSelectedBook(bookDetails);  // Now this should work as `setSelectedBook` is defined
            setIsModalOpen(true);
        } catch (error) {
            console.error("Failed to fetch book details:", error);
            // Handle error (e.g., notify the user)
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBookId(null);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastBook = currentPage * itemsPerPage;
    const indexOfFirstBook = indexOfLastBook - itemsPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    const totalPages = Math.ceil(books.length / itemsPerPage);

    return (
        <div>
            <Header title="BookQuest - API Search Engine" />
            <SearchForm onSearch={handleSearch} />
            <Settings itemsPerPage={itemsPerPage} onItemsPerPageChange={handlePaginationChange} />
            <BooksGrid books={currentBooks} onBookClick={handleBookClick} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            {isModalOpen && (
                <Modal show={isModalOpen} onClose={handleCloseModal} bookId={selectedBookId} />
            )}
        </div>
    );
};

export default MainPage;
