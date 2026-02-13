const { baralho, FlashCard } = require("../FlashCards/data");
const listarAll = require("./listarAll");
const prompt = require('../FlashCards/prompt/prompt')
function remove() {
    listarAll();

    let escolha = parseInt(prompt('Selecione qual deseja apagar: ')) - 1;

    if (isNaN(escolha) || escolha < 0 || escolha >= FlashCard.length) {
        console.log("Escolha inválida.");
        return;
    }

    FlashCard.splice(escolha, 1);
    console.log("Flashcard removido com sucesso!");
}

module.exports = remove