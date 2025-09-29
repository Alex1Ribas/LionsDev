const candidato = require("./candidato");
const eleitores = require('./eleitores')
const prompt = require('./prompt')

function votacao(){
    console.log('\nIniciando Votação\n');
    
const eleitor = prompt('Digite seu nome completo: ')
const nasc = prompt('Seu ano de nascimento com 4 digitos: ')

if(2025 - parseInt(nasc) < 18){console.log('Você ainda não pode votar...'); return;}

for(let i = 0; i < eleitores.length; i++)
    if(eleitor === eleitores[i].nome && nasc === eleitores[i].nascimento){ console.log('Não é possivel votar novamente!'); return}



if(candidato.length <= 0){console.log('Sem candidatos registrados...'); return;}

for (let j = 0; j < candidato.length; j++){
console.log(`
    ${candidato[j].numero}. Candidato: ${candidato[j].nome} - Partido: ${candidato[j].sigla}
    `);}

const voto = prompt('Digite o número do candidato: ')

for( let k = 0; k < candidato.length; k++){
    if(parseInt(voto) === candidato[k].numero){
        candidato[k].votos++
    console.log('\nObrigado por votar!\n');
    break
    }
}

eleitores.push({
    id: Date.now(),
    nome: eleitor,
    nascimento: nasc,
    voto: voto
})
}

module.exports = votacao