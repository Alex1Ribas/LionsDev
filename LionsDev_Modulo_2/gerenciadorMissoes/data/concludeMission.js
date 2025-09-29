const { askQuestion, rl } = require("../readline");
const arrayMission = require('./array')

function concludeMission(){
    if(arrayMission.length == 0){
        console.log('Sem missões para concluir.');
        startFunction();
    } else {
        for(let i = 0; i < arrayMission.length; i++){
            console.log('========= MISSÕES LISTADAS =========');
            console.log(`${i + 1} - Nome: ${arrayMission[i].nomeMissao}, Destino: ${arrayMission[i].destino}, Prioridade: ${arrayMission[i].prioridade}, Tripulantes: ${arrayMission[i].arrayTripulantes}, Status: ${arrayMission[i].stats}`);
        }
        rl.question('Escreva o número da missão que você quer concluir: ', (input) => {
            const index = parseInt(input) - 1;
            if(isNaN(index) || index < 0 || index > arrayMission.length){
                console.log('Opcao invalida!!');
                startFunction();
            } else {
                arrayMission[index].stats = 'concluida';
                console.log('Missao concluida com sucesso!!');
            }
        });
    }
}

module.exports = concludeMission