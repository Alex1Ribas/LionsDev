const missionsArray = require("./data/missionsArray");

async function listMissions() {
    console.log("-=".repeat(15));
    if (missionsArray.length === 0) {
        console.log("No missions registered.");
    } else {
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
    }
}

module.exports = listMissions;
