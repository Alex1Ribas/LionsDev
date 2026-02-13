const {baralho} = require('../data')
const prompt = require('../prompt/prompt')

function listarBaralho(){
    if ( baralho.length === 0){ console.log('Nenhum baralho encontrado!'); return;}
    else {

    for(let i = 0; i < baralho.length; i++){
        console.log(`${i + 1}. ${baralho[i].nome} - id : ${baralho[i].id}`);

    }
}
}

module.exports = listarBaralho