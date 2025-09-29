const { baralho, FlashCard } = require("../data");
const listarAll = require("./listarAll");
const prompt = require('../prompt/prompt')
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