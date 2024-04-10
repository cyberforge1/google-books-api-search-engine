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




export const fetchBookDetails = async (bookId) => {
  const requestURL = `${GOOGLE_BOOKS_API_ENDPOINT}/${bookId}`;

  try {
    const response = await fetch(requestURL);
    const data = await response.json();
    return {
      id: data.id,
      image: data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : '',
      title: data.volumeInfo.title,
      author: data.volumeInfo.authors ? data.volumeInfo.authors.join(', ') : 'Unknown Author',
      description: data.volumeInfo.description ? data.volumeInfo.description : 'No description available',
      publishDate: data.volumeInfo.publishedDate, // Publishing date of the book
      country: data.saleInfo.country, // Country information from saleInfo
      pageCount: data.volumeInfo.pageCount, // Number of pages
      categories: data.volumeInfo.categories ? data.volumeInfo.categories.join(', ') : 'No categories available', // Book categories
      dimensions: data.volumeInfo.dimensions ? `${data.volumeInfo.dimensions.height} x ${data.volumeInfo.dimensions.width}` : 'Dimensions not available', // Physical dimensions of the book, if available
      publisher: data.volumeInfo.publisher, // Publisher of the book
    };
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
};