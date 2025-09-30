const Baralho = require("../models/Baralho"); 
const FlashCard = require("../models/FlashCard");

async function listarFlashCardPorBaralho(baralhoId) {
    try {
        const baralhoSelecionado = await Baralho.findById(baralhoId);

        const flashcardsDoBaralho = await FlashCard.find({ baralhoid: baralhoSelecionado._id });
            return flashcardsDoBaralho
        } catch (error) {
        console.error("Erro ao listar flashcards por baralho:", error.message);
    }
}

module.exports = listarFlashCardPorBaralho;
