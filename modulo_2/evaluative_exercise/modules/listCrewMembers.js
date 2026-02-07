const missionsArray = require("./data/missionsArray");

function listCrewMembers() {
    console.log("========= CREW MEMBERS PER MISSION =========");
    for (let i = 0; i < missionsArray.length; i++) {
        console.log(`\n${i + 1} - Mission: ${missionsArray[i].missionName}`);
        for (let j = 0; j < missionsArray[i].crewMembers.length; j++) {
            console.log(`#${j + 1} - ${missionsArray[i].crewMembers[j]}`);
        }
    }
}

module.exports = listCrewMembers;
