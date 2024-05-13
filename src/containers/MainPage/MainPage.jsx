// MainPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BooksGrid from '../../components/BooksGrid/BooksGrid';
import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import Modal from '../../components/Modal/Modal';
import Pagination from '../../components/Pagination/Pagination';
import Settings from '../../components/Settings/Settings';
import { fetchBooks, fetchBookDetails } from '../../services/BooksService';

const MainPage = () => {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const location = useLocation();
    const initialQuery = location.state?.query;

    useEffect(() => {
        if (initialQuery) {
            fetchBooks(initialQuery).then(setBooks);
        }
    }, [initialQuery]);

    const handleSearch = async (query) => {
        const fetchedBooks = await fetchBooks(query);
        setBooks(fetchedBooks);
        setCurrentPage(1); // Reset to first page with new results
    };

    const handleBookClick = async (bookId) => {
        try {
            const bookDetails = await fetchBookDetails(bookId);
            setSelectedBook(bookDetails);
            setIsModalOpen(true);
        } catch (error) {
            console.error("Failed to fetch book details:", error);
            // Handle error (e.g., notify the user)
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBook(null);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePaginationChange = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
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
            <BooksGrid books={currentBooks} onBookClick={(book) => handleBookClick(book.id)} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            {isModalOpen && (
                <Modal show={isModalOpen} onClose={handleCloseModal} book={selectedBook} />
            )}
        </div>
    );
};

export default MainPage;
