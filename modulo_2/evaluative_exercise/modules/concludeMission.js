const { askQuestion, rl } = require("./readline");
const missionsArray = require("./data/missionsArray");

function concludeMission() {
    if (missionsArray.length === 0) {
        console.log("No missions to conclude.");
        return;
    }

    for (let i = 0; i < missionsArray.length; i++) {
        console.log("========= LISTED MISSIONS =========");
        console.log(`${i + 1} - Name: ${missionsArray[i].missionName}, Destination: ${missionsArray[i].destination}, Priority: ${missionsArray[i].priority}, Crew: ${missionsArray[i].crewMembers.join(", ")}, Status: ${missionsArray[i].status}`);
    }

    rl.question("Enter the number of the mission you want to conclude: ", (input) => {
        const index = parseInt(input, 10) - 1;
        if (isNaN(index) || index < 0 || index >= missionsArray.length) {
            console.log("Invalid option!");
        } else {
            missionsArray[index].status = "Completed";
            console.log("Mission concluded successfully!");
        }
        const { mainMenu } = require("../index");
        mainMenu();
    });
}

module.exports = concludeMission;
