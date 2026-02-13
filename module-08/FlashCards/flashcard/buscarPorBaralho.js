const prompt = require('../prompt/prompt');
const { baralho } = require('../data');
const listarBaralho = require('../baralho/listarBaralho');

function buscaPorBaralho() {
    listarBaralho()
    const termoBusca = prompt("\nDigite o nome do baralho que deseja buscar: ").toLowerCase();

    const resultados = baralho.filter(b => b.nome.toLowerCase().includes(termoBusca));

    if (resultados.length === 0) {
        console.log("Nenhum baralho encontrado com esse nome.");
        return;
    }

    console.log("\nBaralhos encontrados:");
    resultados.forEach((b, index) => {
        console.log(`${index + 1}. ${b.nome} (ID: ${b.baralhoid})`);
    });
}

module.exports = buscaPorBaralho;
