// BooksService.js

const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
const GOOGLE_BOOKS_API_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query, maxResults = 40) => {
  const formattedQuery = encodeURIComponent(query);
  const requestURL = `${GOOGLE_BOOKS_API_ENDPOINT}?q=${formattedQuery}&maxResults=${maxResults}&key=${API_KEY}`;

  try {
    const response = await fetch(requestURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

// Ensure fetchBookDetails is exported
export const fetchBookDetails = async (bookId) => {
  const requestURL = `${GOOGLE_BOOKS_API_ENDPOINT}/${bookId}`;

  try {
    const response = await fetch(requestURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
};
