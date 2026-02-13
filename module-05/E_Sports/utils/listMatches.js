const tournamentArray = require("../data/tournamentArray")

async function listMatches() {
    for (let i = 0; i < tournamentArray.length; i++) {
        console.log("=-".repeat(20));
        console.log(`Tournament: ${tournamentArray[i].name}`);
        console.log("=-".repeat(20));
        for (let y = 0; y < tournamentArray[i].matches.length; y++) {
            console.log(`Match #${y+1}`);
            for (let z = 0; z < tournamentArray[i].matches[y].players.length; z++) {
                console.log(`Players/Teams: ${tournamentArray[i].matches[y].players[z]}`)
            }
            console.log(`Date: ${tournamentArray[i].matches[y].date.toLocaleDateString('en-US')} | Winner: ${tournamentArray[i].matches[y].winner}`);
            console.log("-".repeat(25));
        }
    }
}

module.exports = listMatches;
