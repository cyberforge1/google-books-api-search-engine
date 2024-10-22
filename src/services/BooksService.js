// BooksService.js


const GOOGLE_BOOKS_API_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query, maxResults = 40) => {
  const formattedQuery = encodeURIComponent(query);
  const requestURL = `${GOOGLE_BOOKS_API_ENDPOINT}?q=${formattedQuery}&maxResults=${maxResults}`;

  try {
    const response = await fetch(requestURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (!data.items || data.items.length === 0) {
      console.log('No results found for:', query);
      alert('No books found that match your search.');
      return [];
    }
    return data.items.map((item) => ({
      id: item.id,
      image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
      description: item.volumeInfo.description ? item.volumeInfo.description : 'No description available',
    }));
  } catch (error) {
    console.error('Error fetching books:', error);
    alert('There was an error fetching your books');
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
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
};