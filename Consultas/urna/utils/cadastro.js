const prompt = require('./prompt')
const candidato = require('./candidato')

function cadastro(){
console.log('   Cadastro Candidato  \n');

const nome = prompt('Nome Completo: ')
const num = prompt('Numero para votação: ')
const partido = prompt('Nome do Partido: ')
const sigla = prompt('Sigla do Partido: ')

candidato.push({
    id : Date.now(),
    nome : nome,
    numero: num,
    partido : partido,
    sigla : sigla,
    votos: 0
})
console.log('\n Registrado com sucesso!\n');
}

module.exports = cadastro