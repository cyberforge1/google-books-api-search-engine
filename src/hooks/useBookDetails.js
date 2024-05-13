// useBookDetails.js
import { useState, useEffect } from 'react';
import { fetchBookDetails } from './services/BooksService';

const useBookDetails = (bookId) => {
  const [bookDetails, setBookDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bookId) return;

    const fetchDetails = async () => {
      setIsLoading(true);
      try {
        const details = await fetchBookDetails(bookId);
        setBookDetails(details);
        setError(null);
      } catch (err) {
        setError(err);
        setBookDetails(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [bookId]);

  return { bookDetails, isLoading, error };
};

export default useBookDetails;
