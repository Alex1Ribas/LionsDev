const prompt = require('../prompt/prompt');
const { FlashCard, baralho } = require('../data');
const listarAll = require('./listarAll');

function buscarPorPergunta() {
    listarAll()
    const termoBusca = prompt("Digite a pergunta (ou parte dela) para buscar: ").toLowerCase();

    const resultados = FlashCard.filter(f => f.pergunta.toLowerCase().includes(termoBusca));

    if (resultados.length === 0) {
        console.log("Nenhum flashcard encontrado com essa pergunta.");
        return;
    }

    console.log("\nFlashcards encontrados:");

    resultados.forEach((f, index) => {
        const baralhoRelacionado = baralho.find(b => b.baralhoid === f.baralhoid);
        const nomeBaralho = baralhoRelacionado ? baralhoRelacionado.nome : "Baralho não encontrado";

        console.log(`${index + 1}. [${nomeBaralho}] ${f.pergunta} - ${f.resposta}`);
    });
}

module.exports = buscarPorPergunta;
