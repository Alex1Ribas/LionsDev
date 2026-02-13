const Book = require("./schemaBooks");

const updateBooks = async (id, title, author, year, genre) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            { title, author, year, genre },
            { new: true, runValidators: true }
        );
        return updatedBook;
    } catch (error) {
        console.error("Error updating book:", error.message);
        throw error;
    }
};

module.exports = updateBooks;
