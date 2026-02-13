const Book = require('./schemaBooks');

async function searchBooks(title, author, year, genre) {
    const filters = {}; 

    if (title) filters.title = { $regex: title, $options: 'i' };
    if (author) filters.author = { $regex: author, $options: 'i' };
    if (year) filters.year = parseInt(year);
    if (genre) filters.genre = { $regex: genre, $options: 'i' };

    return await Book.find(filters);
}

module.exports = searchBooks;
