// BooksService.js
const GOOGLE_BOOKS_API_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query, maxResults = 28) => { // Set a default value for maxResults
  const formattedQuery = encodeURIComponent(query); // Ensure the query is URL-safe
  // Include the maxResults parameter in the request URL
  const requestURL = `${GOOGLE_BOOKS_API_ENDPOINT}?q=${formattedQuery}&maxResults=${maxResults}`;

  try {
    const response = await fetch(requestURL);
    const data = await response.json();
    // Check if the data includes items, otherwise return an empty array
    return data.items ? data.items.map((item) => ({
      id: item.id,
      image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
      description: item.volumeInfo.description ? item.volumeInfo.description : 'No description available',
    })) : [];
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};