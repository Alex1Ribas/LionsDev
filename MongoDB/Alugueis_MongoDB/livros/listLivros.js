const Book = require("./schemaLivros");

const listLivros = async () => {
  try{
    return await Book.find();
  } catch(error){
    console.error("Error to find books");
    throw error;
  }
};

module.exports = listLivros