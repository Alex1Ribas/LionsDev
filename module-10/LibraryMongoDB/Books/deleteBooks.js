const Book = require("./schemaBooks");

const deleteBook = async (id) => {
    try {
        return await Book.findByIdAndDelete(id);
    } catch (error) {
        console.error("Error, book not deleted!", error.message);
        throw error;      
    }
};

module.exports = deleteBook;
