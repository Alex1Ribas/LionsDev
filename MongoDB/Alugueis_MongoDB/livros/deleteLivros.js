const Book = require("./schemaLivros");

const deleteLivro = async (id)=> {
    try{
        return await Book.findByIdAndDdelete(id);
    } catch (error) {
        console.error("Error, Books not deleted!", error.message);
        throw error;      
    }
};

module.exports = deleteLivro;