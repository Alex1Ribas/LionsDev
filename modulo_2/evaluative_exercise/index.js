const { askQuestion, rl } = require("./modules/readline");
const addMission = require("./modules/addMission");
const listMissions = require("./modules/listMissions");
const concludeMission = require("./modules/concludeMission");
const listCrewMembers = require("./modules/listCrewMembers");
const filterByPriority = require("./modules/filterByPriority");
const destinationRanking = require("./modules/destinationRanking");
const editMission = require("./modules/editMission");

let running = true;

async function mainMenu() {
    while (running) {
        const choice = await askQuestion(`
                Options menu
            1 - Add mission
            2 - List missions
            3 - Edit mission
            4 - Mark as completed
            5 - Filter by priority
            6 - Destination ranking
            7 - List crew members
            8 - Exit
            `);

        switch (choice.trim()) {
            case "1":
                await addMission();
                break;
            case "2":
                await listMissions();
                break;
            case "3":
                await editMission();
                break;
            case "4":
                concludeMission();
                return;
            case "5":
                filterByPriority();
                return;
            case "6":
                await destinationRanking();
                break;
            case "7":
                listCrewMembers();
                break;
            case "8":
                console.log("Exiting...");
                running = false;
                rl.close();
                break;
            default:
                break;
        }
    }
}

mainMenu();

module.exports = { mainMenu };
