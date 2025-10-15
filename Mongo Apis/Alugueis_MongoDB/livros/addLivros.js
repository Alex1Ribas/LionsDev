const Book = require("./schemaLivros");

const addLivros = async (title, author, year, genre) => {
    try{
        const newBook = new Book({title, author, year, genre});
        return await newBook.save();
    } catch (error){
        console.error("Erro to create a book:", error.message);
        throw error;        
    }
}

module.exports = addLivros