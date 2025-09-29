const { askQuestion, rl } = require("../readline");
const arrayMission = require('./array')

function filtrarPrioridade() {
    if (arrayMission.length === 0) {
        console.log('Nenhuma missão em andamento!\nPressione ENTER para voltar...');
        return;
    }

    const prioridade = [...new Set(arrayMission.map(missao => missao.prioridade))];

    console.log('Níveis de Prioridade:\n');
    prioridade.forEach((p, index) => {
        console.log(`${index + 1}. ${p}`);
    });

    rl.question('Digite qual nível de prioridade deseja verificar:\n', (input) => {
        const indice = parseInt(input) - 1;

        if (isNaN(indice) || indice < 0 || indice >= prioridade.length) {
            console.log('Digite um número válido\n');
            return filtrarPrioridade();
        }

        const prioridadeEscolhida = prioridade[indice];
        const nivelPrioridade = arrayMission.filter(missao => missao.prioridade === prioridadeEscolhida);

        console.log(`\nMissões com a prioridade ${prioridadeEscolhida}:`);
        nivelPrioridade.forEach((missao, index) => {
            const tripulantes = missao.arrayTripulantes.length > 0
                ? missao.arrayTripulantes.join(', ')
                : 'Nave vazia';
            console.log(`${index + 1}. Missão: ${missao.destino}, Tripulantes: ${tripulantes}, Prioridade: ${missao.prioridade}`);
        });
    });
}

module.exports = filtrarPrioridade