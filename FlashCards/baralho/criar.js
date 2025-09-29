const prompt = require('../prompt/prompt')
const {baralho} = require('../data')

function criarBaralho(){

    let id = Date.now()
    let nome = prompt('Título do Baralho: ')
    baralho.push({
        id: id,
        baralhoid : id,
        nome: nome,
    })
    console.log("\n Baralho criado com sucesso!\n");
    
}



module.exports = criarBaralho