# Module 08 – Advanced CLI Systems and Business Rules

## Description
This module consolidates advanced JavaScript concepts through the development of **complete CLI-based systems**. The focus is on **business rules**, **data relationships**, **validation**, and **modular architecture**, simulating real backend logic before introducing frameworks or databases.

The module contains two major projects:
- **FlashCards System**
- **Voting System**

Both projects emphasize structured code, separation of responsibilities, and consistent system behavior.

---

## Project 1 – FlashCards System

### Overview
A modular **FlashCards management system** executed via terminal. The system allows users to manage decks (baralhos) and flashcards, including creation, listing, searching, updating, and removal.

### Key Features
- Modular architecture with clear separation of concerns
- Relationship between entities:
  - FlashCards linked to Decks via `deckId`
- Full CRUD operations for both FlashCards and Decks
- Advanced search features:
  - Search by question (partial match)
  - Filter flashcards by deck
- Strong input validation and user feedback
- All interactions handled via `console.log`

### Technical Highlights
- Shared in-memory data layer using exported arrays
- Extensive use of:
  - `filter`
  - `push`
  - `splice`
  - `for`, `forEach`
  - `includes`
- Validation using `if`, `isNaN`, boundary checks
- Menu-driven navigation using `switch/case`

### Learning Focus
- Entity relationships without a database
- Modular system design
- Validation-heavy logic
- Preparation for database-driven backends

---

## Project 2 – Voting System

### Overview
A terminal-based **voting system simulation**, implementing real-world voting rules and constraints. The system controls candidate registration, voting, and vote counting with a strong emphasis on integrity.

### Key Features
- Candidate management with predefined and dynamic entries
- Voting process with:
  - Age validation (18+)
  - Vote uniqueness enforcement
  - Candidate availability validation
- Vote counting and result apuration
- Identification of the most voted candidate
- Confirmation prompts for sensitive operations

### Technical Highlights
- In-memory storage for:
  - Candidates
  - Voters
- Vote incrementation logic using loops
- Business rule enforcement before state mutation
- Modular structure with centralized menu routing

### Learning Focus
- Real-world business rules
- Data consistency and system integrity
- Sequential system flow control
- Backend-style validation logic

---

## Tech Stack
- Node.js
- JavaScript
- prompt-sync

---

## Learning Outcomes
- Ability to design **complete CLI systems**
- Strong understanding of **business rule enforcement**
- Confident use of **modular architecture**
- Experience modeling **real-world systems without frameworks**
- Solid foundation for migration to **Express.js and MongoDB**

---

## Notes
This module represents a significant step from isolated exercises to **system-level thinking**. Both projects are structured to be easily refactored into RESTful APIs by replacing in-memory arrays with database persistence.
