const { askQuestion } = require("./askQuestion")
const tournamentArray = require("../data/tournamentArray")

async function registerMatch() {
    const matchDate = new Date();
    console.log("=-".repeat(20));
    for (let i = 1; i <= tournamentArray.length; i++) {
        console.log(`${i} : ${tournamentArray[i-1].name} , ${tournamentArray[i-1].game}, ${tournamentArray[i-1].date}`);
    }

    let tournamentId = await askQuestion("Select the Tournament ID: ")
    let playersCount = await askQuestion("Enter the Number of Players: ")
    let players = []

    for (let i = 0; i < playersCount; i++) {
        players.push(await askQuestion("Player or Team Nickname: "))
    }
    let winner = await askQuestion("Match Winner: ")
    let match = {
        players : players,
        date : matchDate,
        winner : winner
    }
    tournamentArray[tournamentId-1].matches.push(match);    
    console.log("Match Saved! ")
}

module.exports = registerMatch;
