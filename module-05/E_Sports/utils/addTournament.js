const { askQuestion } = require("./askQuestion")
const tournamentArray = require("../data/tournamentArray")

async function addTournament(){
    let participants = [];
    let name = await askQuestion('Enter tournament name: ');
    let game = await askQuestion('Enter game name: ');

    let date = await askQuestion('Enter tournament date (DD/MM/YYYY): ');
    const dateParts = date.split('/')                                         
    const formattedDate = `${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`

    let condition = true;
    while(condition){
        let participant = await askQuestion('Enter participant name: ');
        participants.push(participant);
        let addMore = await askQuestion("Do you want to add more participants? (Y/N)");
        if (addMore.toUpperCase() == "Y") {
            continue;
        } else {
            condition = !condition;
        }
    }

    let tournament = {
        name,
        game,
        date : formattedDate,
        participants,
        matches : []
    }

    tournamentArray.push(tournament);
    console.log('Tournament Registered!!!');
}

module.exports = addTournament
