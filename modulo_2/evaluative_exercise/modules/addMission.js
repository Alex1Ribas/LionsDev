const { askQuestion, rl } = require("./readline");
const missionsArray = require("./data/missionsArray");

async function addMission() {
    console.log(`
        Adding a mission....
    `);

    const missionName = await askQuestion("Enter the mission name: ");
    const destination = await askQuestion("Enter the crew destination: ");
    const priority = await askQuestion("Enter the priority (1-5): ");
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
        status: "Pending"
    };
    missionsArray.push(mission);
    console.log("Mission registered.");
}

module.exports = addMission;
