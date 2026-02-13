const { books } = require("../data/data");

function updateBooks(req, res){
    const { id } = req.params;
    const newTitle = req.body.title;
    const newAuthor = req.body.author;
    const newYear = req.body.year;
    const newGenre = req.body.genre;


    const book = books.find((l) => l.id == id);

    if(!book){
        return res.status(404).send({ message: "Book not found!" });
    }

    book.title = newTitle;
    book.author = newAuthor;
    book.year = newYear;
    book.genre = newGenre
    
    res.status(200).send({
        message: "The book title was updated successfully!",
        book: book,
    });
};

module.exports = updateBooks;