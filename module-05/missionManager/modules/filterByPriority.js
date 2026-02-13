const { askQuestion, rl } = require("./readline");
const missionsArray = require("./data/missionsArray");

function filterByPriority() {
    if (missionsArray.length === 0) {
        console.log("No missions in progress!\nPress ENTER to go back...");
        return;
    }

    const priorities = [...new Set(missionsArray.map(mission => mission.priority))];
    console.log("Priority levels:\n");
    priorities.forEach((p, index) => {
        console.log(`${index + 1}. ${p}`);
    });

    rl.question("Enter which priority level to view:\n", (input) => {
        const index = parseInt(input, 10) - 1;
        if (isNaN(index) || index < 0 || index >= priorities.length) {
            console.log("Enter a valid number\n");
            return filterByPriority();
        }

        const chosenPriority = priorities[index];
        const missionsWithPriority = missionsArray.filter(mission => mission.priority === chosenPriority);
        console.log(`\nMissions with priority ${chosenPriority}:`);
        missionsWithPriority.forEach((mission, i) => {
            const crew = mission.crewMembers.length > 0
                ? mission.crewMembers.join(", ")
                : "No crew";
            console.log(`${i + 1}. Mission: ${mission.destination}, Crew: ${crew}, Priority: ${mission.priority}`);
        });
        const { mainMenu } = require("../index");
        mainMenu();
    });
}

module.exports = filterByPriority;
