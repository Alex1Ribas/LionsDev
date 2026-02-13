const { books, rentals } = require("../data/data");

function deleteBook(req, res){
    const { id } = req.params;
    const index = books.findIndex((book) => book.id == parseInt(id));

    if (index === -1) {
        return res.status(404).send({ message: "Book not found!"});
    }

    if(rentals.includes(books[index])){
        return res.status(400).send({message: "Book has an active rental, removal is not allowed"})
    };
    
    const deleted = books.splice(index, 1)[0];
    res
    .status(200)
    .send({ message: "Book deleted successfully!", book: deleted});
};

module.exports = deleteBook;