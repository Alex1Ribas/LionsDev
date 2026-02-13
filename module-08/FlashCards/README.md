# FlashCards System – Modular CLI Application

## Description
This project implements a **FlashCards management system** using a **modular architecture** in Node.js. The application runs entirely in the terminal and allows users to create, list, search, update, and remove flashcards and decks.

The project focuses on **data relationships**, **input validation**, and **separation of responsibilities**, simulating how structured backend logic works before introducing databases.

All user interaction and system feedback (success or error messages) are handled via `console.log`.

## Project Structure

```
FlashCards/
│
├── data.js
├── index.js
├── prompt
│
├── flashcard/
│ ├── listarAll.js
│ ├── listarFlashCardPorBaralho.js
│ ├── buscarPorPergunta.js
│ ├── buscarPorBaralho.js
│ ├── criar.js
│ ├── atualizar.js
│ └── remover.js
│
└── baralho/ 
├──listarBaralho.js 
├── create.js 
├── update.js 
└── remove.js
```

## Core Files

### `data.js`

* Exports empty arrays used as in-memory storage: 

* `deck` 
* `flashcard`
* Acts as a shared data layer across modules.

### `prompt`

* Imports and exports `prompt-sync`.
* Centralizes user input handling for reuse across the application.

### `index.js`

* Main entry point.
* Displays the menu and routes user actions using `switch/case`.
* Integrates all modularized functions.

## FlashCard Module (`/flashcard`)

### `listAll.js`

* Initializes a control variable (`0`)
* Uses a `for` loop to iterate over flashcards
* Uses `filter` to display flashcards by ID
* Validates empty array with `if`
* Uses template literals for formatted console output

### `listFlashCardByDeck.js`

* Call deck listing function
* Adjusts user input (`choice - 1`) for usability
* Validates input usage: 

* `isNaN` 
* Boundary checks (`< 0` or `> array.length`)
* Filters flashcards by comparing `deckId`
* Displays results or an empty message using `if`

### `searchByQuestion.js`

* Calls full listing
* Converts user input to lowercase
* Uses `filter` + `includes` for partial search
* Applies lowercase comparison for consistency
* Uses `if` for validation
* Displays results with `forEach`
* Uses ternary operator for fallback messaging

### `update.js`

* Calls full listing
* Adjusts user selection index
* Validates input
* Stores new values ​​in variables
* Updates flashcard using direct index assignment: 

```js 
flashcard[choice].property = newValue 
```

### `remove.js`

* Calls full listing
* Validates user selection
* Remove flashcard using `splice`

### `create.js`

* Call deck listing
* Validates deck selection
* Collects question and answer input
* Prevents duplicate flashcards using `if` + `for`
* Adds flashcard using `push`
* Links flashcard to a deck using: 

* `deckId` property

### `searchByDeck.js`

* Filters flashcards by associated `deckId`
* Displays grouped flashcards by deck

## Deck Module (`/deck`)

### `listDeck.js`

* Validates if deck array is not empty
* Displays formatted output using `for` loop

### `create.js`

* Generates ID using `Date.now()`
* Creates deck object with: 

* `id` 
* `name`
* Establishes relationship via `deckId`

### `update.js`

* Call deck listing
* Validates user selection
* Updates deck name via direct assignment

### `remove.js`

* Asks for confirmation before deletion
* Validates responses using `toLowerCase()` and `if`
* Proceeds or cancels deletion accordingly

## Tech Stack

* Node.js
* JavaScript
* prompt-sync

## How to Run

1. Open the terminal in the `FlashCards` directory.
2. Run: 

```bash 
node index.js 
```
3. Interact using the menu options displayed in the console.

## Learning Notes

* Strong emphasis on **modular architecture**.
* Demonstrates **data relationships** using IDs (FlashCard ↔ Deck).
* Focus on **validation**, **user experience**, and **structured logic**.
* Serves as a solid foundation for future migration to a database-driven backend.