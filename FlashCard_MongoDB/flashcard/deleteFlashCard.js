const FlashCard = require("./schemaFlashCards");

const deleteFlashcard = async (id) => {
    try{
        return await FlashCard.findByIdAndDelete(id);
    } catch (error){
        console.error("Error to find FalashCard", error.message);
        throw error;
    }
};

module.exports = deleteFlashcard