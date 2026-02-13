const FlashCard = require("./schemaFlashCards");

const ListFlashCards = async () => {
    try {
        const FlashCardEncontrado = await FlashCard.find(); 
        return FlashCardEncontrado;
    } catch (error) {
        console.error("Error finding FlashCard", error.message);
        throw error;
    }
};

module.exports = ListFlashCards;
