const { books } = require("../data/data");

function listBooks(req, res) {
  if (books.length === 0) {
    return res.status(404).json({ message: "No books found" });
  }

  const bookData = books.map(book => ({
    title: book.title,
    author: book.author,
    year: book.year,
    genre: book.genre
  }));

  res.status(200).send(bookData);
}

module.exports = listBooks