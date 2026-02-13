const tournamentArray = require("../data/tournamentArray")
const { askQuestion } = require("./askQuestion")

async function filterMatches(){
    console.log("=".repeat(10)+' Filter Tournament by Game '+ '='.repeat(10))
    if( tournamentArray.length === 0){
        console.log('\nSearching... '.repeat(3) + '\nNo tournaments registered...\n\nPress Enter to go back\n')
        await askQuestion(" ")
        return;
    }   

    const games = [...new Set(tournamentArray.map(t => t.game))];
    console.log('Tournaments:\n');
    games.forEach((g, index) => {
        console.log(`${index + 1}. ${g}`)
    })

    let choice = await askQuestion('\nChoose a game to follow:\n')

    let index = parseInt(choice) - 1
    if (index < 0 || isNaN(index) || index >= games.length){
        console.log('Please choose a valid number...')
        return filterMatches()
    }

    const selectedGame = games[index];
    const filteredTournaments = tournamentArray.filter(t => t.game === selectedGame);
    console.log('=-'.repeat(30) + `\n Tournaments for game "${selectedGame}":\n`);

    if (filteredTournaments.length === 0) {
        console.log('No tournaments found for this game.\n');
    } else {
        filteredTournaments.forEach((t, i) => {
            console.log(`${i + 1}. ${t.name} (${t.game})`);
        });
    }

    console.log('=-'.repeat(30) + '\nPress Enter to go back');
    await askQuestion(" ")
}

module.exports = filterMatches;
