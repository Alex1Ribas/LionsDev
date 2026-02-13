const FlashCard = require("../flashcard/schemaFlashCards");
const Baralho = require("./schemaBaralho");

const deleteBaralho = async (id) => {
    try {
        const baralhoDeletado = await Baralho.findByIdAndDelete(id);
        await FlashCard.deleteMany({ BaralhoId: id });
        return baralhoDeletado;
    } catch (error) {
        console.error("Erro ao apagar o baralho e seus flashcards:", error.message);
        throw error;
    }
};

module.exports = deleteBaralho;