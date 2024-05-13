import React from 'react';

const ModalBody = ({ book }) => {
    const stripHtml = (html) => {
        if (!html) return '';
        const tempDivElement = document.createElement("div");
        tempDivElement.innerHTML = html;
        return tempDivElement.textContent || tempDivElement.innerText || "";
    };

    // Ensure you're accessing nested properties safely
    const {
        imageLinks, title, authors, description, publishedDate, publisher, pageCount, categories, dimensions
    } = book.volumeInfo || {};

    const cleanDescription = description ? stripHtml(description) : 'No description available';
    const authorText = authors ? authors.join(', ') : 'Unknown Author';
    const categoryText = categories ? categories.join(', ') : 'No categories listed';
    const thumbnail = imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : '';
    const dimensionText = dimensions ? `H: ${dimensions.height}, W: ${dimensions.width}, Thick: ${dimensions.thickness}` : 'Dimensions not available';

    return (
        <div className="modal-body">
            {thumbnail && <img src={thumbnail} alt={title} className="book-image" />}
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Author:</strong> {authorText}</p>
            <p><strong>Description:</strong> {cleanDescription}</p>
            <p><strong>Publish Date:</strong> {publishedDate}</p>
            <p><strong>Publisher:</strong> {publisher}</p>
            <p><strong>Page Count:</strong> {pageCount}</p>
            <p><strong>Categories:</strong> {categoryText}</p>
            <p><strong>Dimensions:</strong> {dimensionText}</p>
        </div>
    );
};

export default ModalBody;