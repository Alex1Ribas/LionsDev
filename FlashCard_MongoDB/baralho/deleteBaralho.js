const FlashCard = require("../flashcard/schemaFlashCards");
const Baralho = require("./schemaBaralho");

const deleteBaralho = async (id) => {
    try {
        const baralhoDeletado = await Baralho.findByIdAndDelete(id);

        if (!baralhoDeletado) {
            console.log("Baralho não encontrado!");
            return null;
        }

        await FlashCard.deleteMany({ baralhoid: id });

        console.log("Baralho e flashcards relacionados foram apagados com sucesso!");
        return baralhoDeletado;
    } catch (error) {
        console.error("Erro ao apagar o baralho e seus flashcards:", error.message);
        throw error;
    }
};

module.exports = deleteBaralho;