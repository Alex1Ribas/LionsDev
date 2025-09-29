const prompt = require('../prompt/prompt');
const { baralho, FlashCard }= require('../data');
const listarBaralho = require('../baralho/listarBaralho');

function criarFlashCard() {
    listarBaralho(); 

    let escolha = prompt('Escolha o baralho: ') - 1;

    if (isNaN(escolha) || escolha < 0 || escolha >= baralho.length) {
        console.log('Escolha um índice válido');
        return;  
    }
    const baralhoescolha = baralho[escolha];
    let pergunta = prompt('Seu flashcard: ');
    let resposta = prompt('Resposta: ');

    for (let i = 0; i < FlashCard.length; i++) {
        if (FlashCard[i].pergunta == pergunta || FlashCard[i].resposta == resposta) {
            console.log('Este flashcard já existe neste baralho!');
            return;
        }
    }

    FlashCard.push({
        id: Date.now(),
        baralhoid: baralhoescolha.baralhoid,
        pergunta: pergunta,
        resposta: resposta
    });

    console.log('Flashcard adicionado com sucesso!');
}

module.exports = criarFlashCard;
