# Modular calculator

**Module 1** project from the LionsDev course: a command-line calculator with code split into modules. The focus is on separation of concerns, using `require`/`module.exports`, and handling user input in Node.js.

## What it does

The app prompts for two numbers and an operator (+, -, *, /) in the terminal, validates the input, and prints the result.

## Project structure

| File               | Responsibility                                                                 |
|--------------------|---------------------------------------------------------------------------------|
| `index.js`         | Entry point: reads input, runs validation and the operation, prints the result |
| `input.js`         | Reads user input via `prompt-sync`                                             |
| `validation.js`    | Checks that the inputs are valid numbers                                       |
| `addition.js`      | Addition operation                                                             |
| `subtraction.js`   | Subtraction operation                                                          |
| `multiplication.js`| Multiplication operation                                                       |
| `division.js`      | Division operation                                                             |

Each operation and the input/validation logic live in separate files, exported and used from `index.js`.

## Prerequisites

- Node.js (v14 or higher)
- npm

## How to run

1. Go to the project folder:

   ```bash
   cd LionsDev/modulo_1/calculator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the calculator:

   ```bash
   node index.js
   ```

4. Follow the prompts: enter the two numbers and the operator (+, -, *, /).

## Dependencies

- **prompt-sync** — synchronous terminal input.

## Repository context

This project lives under `modulo_1/calculator/`, alongside other Module 1 exercises (e.g. `evaluative_exercise/` and `exercises/`), in the [LionsDev](https://github.com/Alex1Ribas/LionsDev) repository.

---

**Contributors:** Alex Ribas, Vitor Inacio, Vitor Balbinot, Lucas Stroka, Eduardo Rosas
