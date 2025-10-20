const candidato = require("./candidato");

function apuracao() {
    console.log('   APURAÇÃO DOS VOTOS  ');

    for (let i = 0; i < candidato.length; i++) {
        console.log(`${candidato[i].numero}. ${candidato[i].nome} - Votos recebidos: ${candidato[i].votos}`);
    }

    let maisvotado = candidato[0];

    for (let j = 1; j < candidato.length; j++) {
        if (candidato[j].votos > maisvotado.votos) {
            maisvotado = candidato[j];
        }
    }

    console.log(`\nO vencedor foi: ${maisvotado.nome} do partido: ${maisvotado.partido} (${maisvotado.sigla}), com o total de: ${maisvotado.votos} votos.`);
}

module.exports = apuracao;
