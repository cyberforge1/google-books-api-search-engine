// BooksService.js

const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
const GOOGLE_BOOKS_API_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes';

// Verify that the API key is loaded
if (!API_KEY) {
  console.error('VITE_GOOGLE_BOOKS_API_KEY is not defined!');
} else {
  console.log('API_KEY:', API_KEY);
}

export const fetchBooks = async (query, maxResults = 40) => {
  const formattedQuery = encodeURIComponent(query);
  const requestURL = `${GOOGLE_BOOKS_API_ENDPOINT}?q=${formattedQuery}&maxResults=${maxResults}&key=${API_KEY}`;

  console.log('Request URL:', requestURL); // Debug the request URL

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

// Debugging: Check if the environment variable is loaded correctly
console.log('API_KEY:', import.meta.env.VITE_GOOGLE_BOOKS_API_KEY);
