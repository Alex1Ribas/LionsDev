const Book = require("./schemaBooks");

const addBooks = async (data) => {
    try {
        const newBook = new Book({
            title: data.title,
            author: data.author,
            year: data.year,
            genre: data.genre
        });
        return await newBook.save();
    } catch (error) {
        console.error("Error creating a book:", error.message);
        throw error;        
    }
}

module.exports = addBooks;
