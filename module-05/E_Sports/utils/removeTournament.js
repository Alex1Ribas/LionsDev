const tournamentArray = require("../data/tournamentArray")
const { askQuestion } = require("./askQuestion")

async function removeTournament() {
    console.log('========== REMOVE TOURNAMENT ==========');
    if (tournamentArray.length === 0) {
        console.log('No tournaments to remove.');
        console.log('\nPress ENTER to go back...');
        await askQuestion('');
        return;
    }

    console.log('Available tournaments for removal:');
    tournamentArray.forEach((t, index) => {
        console.log(`${index + 1} - ${t.name} (${t.game})`);
    });

    const input = await askQuestion('Enter the NUMBER of the tournament you want to remove: ');
    const indexToRemove = parseInt(input) - 1;

    if (isNaN(indexToRemove) || indexToRemove < 0 || indexToRemove >= tournamentArray.length) {
        console.log('Invalid input. Please enter a valid number from the list.');
    } else {
        const removedTournament = tournamentArray.splice(indexToRemove, 1);
        console.log(`Tournament "${removedTournament[0].name}" was successfully removed!`);
    }
}

module.exports = removeTournament;
