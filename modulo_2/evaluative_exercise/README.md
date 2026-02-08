# Evaluative exercise – Mission manager

**Module 2** evaluative project: a CLI **mission manager** with a main menu and modular actions. Missions have name, destination, priority, crew members, and status. Built with Node.js and `readline` for async input.

## Features

- **Add mission** – Register a new mission with name, destination, priority (1–5), and crew members.
- **List missions** – Show all missions and their crew.
- **Edit mission** – Update an existing mission by number.
- **Mark as completed** – Set a mission’s status to completed.
- **Filter by priority** – List missions by priority level.
- **Destination ranking** – Count how many missions go to a given destination.
- **List crew members** – Show crew per mission.
- **Exit** – Close the app.

## Project structure

| Path | Role |
|------|------|
| `index.js` | Entry point; runs the main menu loop and delegates to modules. |
| `modules/readline.js` | Shared `readline` interface and `askQuestion()` helper. |
| `modules/data/missionsArray.js` | In-memory array of missions (exported). |
| `modules/addMission.js` | Add a new mission and crew. |
| `modules/listMissions.js` | List all missions. |
| `modules/editMission.js` | Edit a mission by index. |
| `modules/concludeMission.js` | Mark a mission as completed. |
| `modules/filterByPriority.js` | Filter and list by priority. |
| `modules/destinationRanking.js` | Ranking/count by destination. |
| `modules/listCrewMembers.js` | List crew members per mission. |

