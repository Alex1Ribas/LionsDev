const {askQuestion, rl} = require("./utils/askQuestion")
const addTournament = require("./utils/addTournament")
const listTournaments = require("./utils/listTournaments")
const filterMatches = require("./utils/filterMatches")
const registerMatch = require("./utils/registerMatch")
const listMatches = require("./utils/listMatches")
const removeTournament = require("./utils/removeTournament")

async function startFunction() {
   
let cond = !false
    while (cond) {
        let menu = 
        parseInt(await askQuestion(`
    ====== E-SPORTS MENU ======
    1. Add Tournament
    2. List Tournaments
    3. Register Match
    4. list Matches
    5. Filter Matches
    6. Remove Tournament
    7. SAIR
    `))
        switch (menu) {
            case 1: await addTournament(); break;
            case 2: await listTournaments(); break;
            case 3: await registerMatch(); break;
            case 4: await listMatches(); break;
            case 5: await filterMatches(); break;
            case 6: await removeTournament(); break;
            case 7:
                cond = !true 
                rl.close(); 
                break;
            default:
                console.log("Invalid number...")
                startFunction();
                break;
        }
    }
}
startFunction()