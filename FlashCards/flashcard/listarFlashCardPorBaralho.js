const listarBaralho = require("../baralho/listarBaralho");
const { baralho, FlashCard } = require("../data");
const prompt = require('../prompt/prompt');

function listarFlashCardPorBaralho() {
    listarBaralho();

    let escolha = prompt('Selecione um baralho: ') - 1;

    if (isNaN(escolha) || escolha < 0 || escolha >= baralho.length) {
        console.log("Selecione um índice válido!");
        return;
    }

    const baralhoSelecionado = baralho[escolha];

    const flashcardsDoBaralho = FlashCard.filter(f => f.baralhoid === baralhoSelecionado.baralhoid);

    if (flashcardsDoBaralho.length === 0) {
        console.log("Este baralho não possui flashcards.");
        return;
    }

    for (let i = 0; i < flashcardsDoBaralho.length; i++) {
        console.log(`${baralhoSelecionado.nome} - ${flashcardsDoBaralho[i].pergunta} - ${flashcardsDoBaralho[i].resposta}`);
    }
}

module.exports = listarFlashCardPorBaralho;
