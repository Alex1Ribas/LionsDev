const Book = require("./schemaBooks");

const listBooks = async () => {
  try {
    return await Book.find();
  } catch(error) {
    console.error("Error finding books");
    throw error;
  }
};

module.exports = listBooks;
