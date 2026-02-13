const { askQuestion } = require("./askQuestion");
const tournamentArray = require("../data/tournamentArray")

async function listTournaments(){
    for(let i=0; i<tournamentArray.length; i++){
        console.log('========== TOURNAMENT LISTING ==========');
        console.log(`${i + 1} - Name: ${tournamentArray[i].name}, Game: ${tournamentArray[i].game}, Date: ${tournamentArray[i].date}`);
        console.log('Participants: ');
        for(let j=0; j<tournamentArray[i].participants.length; j++){
            console.log(`${j + 1} - ${tournamentArray[i].participants[j]}`);
        }
    }
    console.log('Press ENTER to go back...');
    await askQuestion(" ")
}   
module.exports = listTournaments
