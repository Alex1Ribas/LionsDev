const prompt = require('../prompt/prompt');
const { baralho } = require("../data");
const listarBaralho = require("./listarBaralho");

function atualizarBaralho(){
    listarBaralho()

    let escolha = prompt('Selecione um baralho: ') - 1;
        if ( isNaN(escolha) || escolha < 0 || escolha >= baralho.length)
        {console.log(" Escolha um indice valido!"); return;}

    let novoNome = prompt('Novo nome do baralho: ')

    baralho[escolha].nome = novoNome
 console.log('\nBaralho atualizado com sucesso!\n'); return; 
}

module.exports = atualizarBaralho