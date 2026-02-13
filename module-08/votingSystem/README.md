# Urna – Electronic Voting System (CLI)

## Description
This project simulates an **electronic voting system** running in the terminal. The goal is to practice **business rules**, **data validation**, and **system flow control**, replicating real-world voting constraints such as age verification, vote uniqueness, and vote counting.

All interactions, validations, and results are displayed via `console.log`.

## Project Structure

```
Urn/
│
├── Uses/
│ ├── Voters.js
│ ├── register.js
│ ├── prompt.js
│ ├── voteCounting.js
│ ├── voting.js
│ └── candidate.js
│
└── index.js
```

## Core Files

### `Utils/voters.js`

* Exports an empty array used to store registered voters.
* Acts as in-memory storage to prevent duplicate voting.

### `Utils/candidate.js`

* Contains a predefined array with two fictional candidates.
* Each candidate object includes: 

* `id` 
* `name` 
* `party` 
* `acronym` 
* `votes`

### `Utils/prompt.js`

* Imports and exports `prompt-sync`.
* Centralizes user input handling across the system.

## Functional Modules

### `Utils/register.js`

* Uses `prompt-sync` to collect candidate data.
* Adds new candidates to the array using `push`.
* Focuses on dynamic candidate registration.

### `Utils/voting.js`

* Handles the voting process.
* Features implemented: 

* User input for name and date of birth 
* Age validation (must be 18 or older) 
* Prevention of duplicate voting 
* Validation to ensure candidates list is not empty 
* Displays candidates for selection 
* User choice validation 
* Vote incrementation using a `for` loop 
* Stores voter information after successful voting

### `Utils/voteCounting.js`

* Displays vote results.
* Uses a `for` loop to: 

* Show each candidate with total votes received 
* Identify and display the most voted candidate

## Entry Point

### `index.js`

* Main application entry.
* Displays the menu using `console.log`.
* Routes actions using `switch/case`.

## Business Rules

* Only users aged **18 or older** can vote
* Each voter can vote **only once**
* Voting is not allowed if there are no registered candidates
* Votes are counted and displayed transparently

## Tech Stack

* Node.js
* JavaScript
* prompt-sync

## How to Run

1. Open the terminal in the project directory.
2. Run: 

```bash 
node index.js 
```
3. Follow the menu instructions displayed in the console.

## Learning Notes

* Reinforces **real-world validation rules**
* Demonstrates **state control** using arrays
* Strong focus on **system integrity** and **data consistency**
* Simulates backend logic commonly found in voting and registration systems
```