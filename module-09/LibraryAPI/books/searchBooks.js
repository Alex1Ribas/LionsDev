const { books } = require("../data/data");

function searchBooks(req, res) {
    const { title, year, author, genre } = req.query;

    if (!title && !year && !author && !genre) {
        return res.status(400).send('Provide at least one search parameter.');
    }

    const results = books.filter(book => {
        return (
            (!title || (book.title && book.title.toLowerCase().includes(title.toLowerCase()))) &&
            (!year || (book.year && book.year.toString().includes(year))) && //toString() to be able to use includes()
            (!author || (book.author && book.author.toLowerCase().includes(author.toLowerCase()))) &&
            (!genre || (book.genre && book.genre.toLowerCase().includes(genre.toLowerCase())))
            //Parameter = true || condition; if the parameter is false, it runs the condition storing it as the variable && checks the next parameter
        );
    });

    if (results.length === 0) {
        return res.status(404).send('No books found!');
    }

    return res.status(200).send(results);
}

module.exports = searchBooks;