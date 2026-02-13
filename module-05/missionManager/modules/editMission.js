const { askQuestion, rl } = require("./readline");
const missionsArray = require("./data/missionsArray");
const listMissions = require("./listMissions");

async function editMission() {
    await listMissions();
    console.log("\n");

    const idEdit = await askQuestion("Which mission do you want to edit (enter number): ");
    const index = parseInt(idEdit, 10) - 1;
    if (isNaN(index) || index < 0 || index >= missionsArray.length) {
        console.log("Invalid option.");
        return;
    }

    const missionName = await askQuestion("Enter the mission name: ");
    const destination = await askQuestion("Enter the crew destination: ");
    const priority = await askQuestion("Enter the priority (1-5): ");
    const status = await askQuestion("Enter the mission status: ");
    const crewMembers = [];
    let keepAdding = true;

    while (keepAdding) {
        console.log("-".repeat(30));
        const member = await askQuestion("Enter crew member name: ");
        crewMembers.push(member);
        console.log("Name added successfully.");
        const addMore = await askQuestion("Add another crew member? (Y/N) ");
        if (addMore.toUpperCase() === "Y") {
            continue;
        } else {
            console.log("All crew members added.");
            keepAdding = false;
        }
    }

    const mission = {
        missionName,
        destination,
        priority,
        crewMembers,
        status
    };
    missionsArray[index] = mission;
    console.log("Mission updated.");
}

module.exports = editMission;
