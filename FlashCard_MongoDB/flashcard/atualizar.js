const { baralho, FlashCard } = require("../data");
const listarAll = require("./listarAll")
const prompt = require('../prompt/prompt')

function atualizarFlash(){
    listarAll()

    let escolha = prompt('Escolha o uma flash: ') - 1;
    
        if (isNaN(escolha) || escolha < 0) {
            console.log('Escolha um índice válido');
            return;  
        }
    
        let novaPergunta = prompt('Seu flashcard: ');
        let novaResposta = prompt('Resposta: ');

    FlashCard[escolha].pergunta = novaPergunta
    FlashCard[escolha].resposta = novaResposta

    console.log("\n Atualização realizada com sucesso! \n");
    
}


module.exports = atualizarFlash