const { id, books } = require("../data/data");

function addBooks(req, res){

    const newBook = {
        id: id.value,
        title: req.body.title,
        author: req.body.author,
        year: parseInt(req.body.year),
        genre: req.body.genre
    };

    books.push(newBook);
    id.value++
    
    res.status(201).send({message: 'Book added successfully!', book: newBook});
}
module.exports = addBooks