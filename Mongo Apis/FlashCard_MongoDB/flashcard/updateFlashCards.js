const FlashCard = require("./schemaFlashCards");

const updateFlashCards = async (id, pergunta, resposta) => {
    try {
        const updated = await FlashCard.findByIdAndUpdate(
            id,
            { pergunta, resposta },
            { new: true, runValidators: true }
        );
        return updated;
    } catch (error) {
        console.error("Error updating Flashcard:", error.message);
        throw error;
    }
};

module.exports = updateFlashCards;