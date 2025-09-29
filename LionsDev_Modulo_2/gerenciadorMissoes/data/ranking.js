const { askQuestion, rl } = require("../readline");
const arrayMission = require('./array')

async function Ranking(){ // Made async
    if (arrayMission.length === 0){ // Use strict equality and check length
        console.log("Nenhuma missão em andamento. \nPressione ENTER para voltar...");
        return;
    } else {
        for (let i = 0; i < arrayMission.length; i++) {
            console.log(`------------------------
#${i+1}
Nome da Missão: ${arrayMission[i].nomeMissao}
Destino: ${arrayMission[i].destino}
Prioridade: ${arrayMission[i].prioridade}
Status: ${arrayMission[i].stats}`);
                console.log("=-Tripulantes-=");
                
                for (let j = 0; j < arrayMission[i].arrayTripulantes.length; j++) {
                    console.log(`#${j+1} - ${arrayMission[i].arrayTripulantes[j]}`);
                }
        }
        const input = await askQuestion('Qual destino você quer o ranking?: ');
        let certo = input.toLowerCase().trim();
        let ranking = 0;

        for(let i = 0; i < arrayMission.length; i++){
            // HERE IS THE FIX: Check the 'destino' property, convert to lowercase for case-insensitive comparison
            if(arrayMission[i].destino && arrayMission[i].destino.toLowerCase().includes(certo)){
                ranking++;
            }
        }
        console.log(`\n--- Ranking para o Destino: ${certo.toUpperCase()} ---`);
        console.log(`Total de missões para este destino: ${ranking}`);
    }
}

module.exports = Ranking