const Baralho = require("../baralho/schemaBaralho");
const FlashCard = require("./schemaFlashCards");


async function listFlashCardsPorBaralho(baralhoId) {
    try {
        const baralhoSelecionado = await Baralho.findById(baralhoId);

        const flashcardsDoBaralho = await FlashCard.find({ baralhoid: baralhoSelecionado._id });
            return flashcardsDoBaralho
        } catch (error) {
        console.error("Erro ao listar flashcards por baralho:", error.message);
    }
}

module.exports = listFlashCardsPorBaralho;
