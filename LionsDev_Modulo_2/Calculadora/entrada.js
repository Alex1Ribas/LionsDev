const prompt = require('prompt-sync')()

function lerEntrada(mensagem){
    return prompt(mensagem)
}

module.exports = lerEntrada