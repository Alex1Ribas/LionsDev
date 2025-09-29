const prompt = require('../prompt/prompt');
const { baralho } = require("../data");
const listarBaralho = require("./listarBaralho");

function removerBaralho(){
    listarBaralho()

    let escolha = prompt('Selecione um baralho: ') - 1;
        if ( isNaN(escolha) || escolha < 0 || escolha >= baralho.length)
        {console.log(" Escolha um indice valido!"); return;}

    let confirmacao = prompt('Realmente deseja apagar o baralho: ' + baralho[escolha].nome + " (s/n)?")
    if (confirmacao.toLowerCase() === 's'){baralho.splice(escolha, 1);
        console.log('\n Removido com sucesso!\n');
    } else {console.log('\nCancelando...\n');return} 
}

module.exports = removerBaralho