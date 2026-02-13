const { askQuestion, rl } = require("./readline");
const missionsArray = require("./data/missionsArray");

async function destinationRanking() {
    if (missionsArray.length === 0) {
        console.log("No missions in progress.\nPress ENTER to go back...");
        return;
    }

    for (let i = 0; i < missionsArray.length; i++) {
        console.log(`------------------------
#${i + 1}
Mission name: ${missionsArray[i].missionName}
Destination: ${missionsArray[i].destination}
Priority: ${missionsArray[i].priority}
Status: ${missionsArray[i].status}`);
        console.log("=- Crew members -=");
        for (let j = 0; j < missionsArray[i].crewMembers.length; j++) {
            console.log(`#${j + 1} - ${missionsArray[i].crewMembers[j]}`);
        }
    }

    const input = await askQuestion("Which destination do you want the ranking for?: ");
    const search = input.toLowerCase().trim();
    let count = 0;

    for (let i = 0; i < missionsArray.length; i++) {
        if (missionsArray[i].destination && missionsArray[i].destination.toLowerCase().includes(search)) {
            count++;
        }
    }
    console.log(`\n--- Ranking for destination: ${search.toUpperCase()} ---`);
    console.log(`Total missions for this destination: ${count}`);
}

module.exports = destinationRanking;
