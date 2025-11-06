const Book = require("./schemaLivros");

const addLivros = async (data) => {
    try{
        const newBook = new Book(data.title, data.author, data.year, data.genre);
        return await newBook.save();
    } catch (error){
        console.error("Erro to create a book:", error.message);
        throw error;        
    }
}

module.exports = addLivros