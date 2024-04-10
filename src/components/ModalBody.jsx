// ModalBody.jsx

const ModalBody = ({ book }) => {
    // Function to remove HTML tags from a string
    const stripHtml = (html) => {
        if (!html) return ''; // Return empty string if html is null or undefined
        const tempDivElement = document.createElement("div");
        tempDivElement.innerHTML = html;
        return tempDivElement.textContent || tempDivElement.innerText || "";
    };

    // Use the stripHtml function on the book's description
    const cleanDescription = stripHtml(book.description);

    return (
      <div className="modal-body">
        {book.image && <img src={book.image} alt={book.title} className="book-image" />}
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Description:</strong> {cleanDescription}</p>
        <p><strong>Publish Date:</strong> {book.publishDate}</p>
        <p><strong>Country:</strong> {book.country}</p>
        <p><strong>Page Count:</strong> {book.pageCount}</p>
        <p><strong>Categories:</strong> {book.categories}</p>
        <p><strong>Dimensions:</strong> {book.dimensions}</p>
        <p><strong>Publisher:</strong> {book.publisher}</p>
      </div>
    );
};

export default ModalBody;