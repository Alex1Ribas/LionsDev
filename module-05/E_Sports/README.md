# E-Sports Tournament Management CLI

## Description

This project is a specialized **Command Line Interface (CLI)** designed for managing E-Sports tournaments and match records. It provides a structured environment to register tournaments, manage participant lists, and track match results with specific winners and timestamps. The system is built with a focus on **modular logic** and **asynchronous user interaction**, ensuring a smooth flow for data entry and retrieval through the terminal.

All tournament data is managed through a centralized state, allowing for real-time filtering and updates during the session.

## Project Structure

```
E_Sports/
│
├── data/
│   └── tournamentArray.js   # Centralized data persistence
│
├── utils/
│   ├── askQuestion.js      # Promisified Interface for Terminal I/O
│   ├── addTournament.js    # Logic for creating new tournaments
│   ├── listTournaments.js  # Detailed listing of events and participants
│   ├── registerMatch.js    # Match scoring and history recording
│   ├── listMatches.js      # Results and match-up history
│   ├── filterMatches.js    # Game-specific search engine
│   └── removeTournament.js # Data cleanup and management
│
└── index.js                # Application entry point & Menu Controller

```

## Core Components

### `utils/askQuestion.js`

* **Asynchronous I/O:** Utilizes the `readline` module wrapped in Promises to handle user input without blocking the event loop.
* **Interface Management:** Centralizes the `stdin` and `stdout` streams, providing a clean API for all other modules.

### `data/tournamentArray.js`

* **Single Source of Truth:** An exported array that acts as the temporary database, maintaining the integrity of tournament objects across different modules.

## Functional Modules

### Business Logic

* **`addTournament.js`**: Handles the creation of new events. Includes a dynamic loop to add an unlimited number of participants and formats dates into standardized strings.
* **`registerMatch.js`**: Connects matches to specific tournaments. It captures the date of the match automatically and allows for player/team assignment and winner declaration.
* **`filterMatches.js`**: Implements a unique game filtering system. It uses `Set` to extract unique game titles and allows the user to view only relevant tournament data.
* **`removeTournament.js`**: Provides administrative control to delete tournaments by index, including safety checks for empty lists and invalid inputs.

### Display & Navigation

* **`listTournaments.js`**: A high-level view of all registered tournaments, showing names, dates, and the full list of participants.
* **`listMatches.js`**: A deep-dive view that explores the nested `matches` array within each tournament, displaying specific match history and winners.

## Business Rules

* **Input Validation:** The system checks for out-of-bounds indices and non-numeric inputs in menus and selection screens.
* **Automatic Timestamping:** Every match registered is automatically assigned a `Date` object to ensure chronological accuracy.
* **Relationship Mapping:** Matches are strictly tied to a parent Tournament, ensuring data consistency (one-to-many relationship).
* **UX Flow:** Every module concludes with an "ENTER to go back" prompt, preventing the terminal from clearing before the user reads the output.

## Tech Stack

* **Node.js:** Runtime environment.
* **JavaScript (ES6+):** Language used, utilizing `async/await`, `destructuring`, and `spread` operators.
* **Readline Module:** Core Node.js library for terminal interaction.

## How to Run

1. **Clone or Navigate to the Directory:**
Ensure you are in the root folder containing `index.js`.
2. **Start the Application:**

```bash
node index.js

```

3. **Navigate the Menu:**

* `1` - Create a new tournament.
* `3` - Add a match result to an existing tournament.
* `5` - Search for tournaments by specific game titles.
* `7` - Safely close the interface.

## Learning Notes

* **Separation of Concerns:** Each CLI action is isolated in its own file, making the codebase easy to maintain and scale.
* **State Management:** Demonstrates how to share and mutate a common data state across multiple modules using CommonJS `require`.
* **Nested Data Structures:** Showcases handling complex objects (Tournaments containing Arrays of Matches containing Arrays of Players).

---

**Ficou ótimo! Precisa que eu ajuste algum detalhe específico na descrição técnica ou quer seguir para a tradução do arquivo de dados `tournamentArray.js`?**

This project was carried out by a team, each of which was responsible for a module of the code, and then grouping was carried out through GitHub. The objective of this activity was the practice of codigo modularization, teamwork and use of github.

Pró-players:
Alex Ribas // Lucas Stroka // Vitor Inacio // Vitor Balbinot