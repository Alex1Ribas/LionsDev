# Module 04 – Intermediate Logic and Small Systems

## Description
This module introduces **more complex logic and problem-solving**, combining user interaction, randomness, and structured functions. It also includes the first non-trivial system simulation, reinforcing how JavaScript can be used to model real-world scenarios using arrays and control flow.

## Projects / Exercises

### 1. `rockPaperScissors.js`
- **Learning focus:** Game logic and randomness.
- **Concepts practiced:**
  - Arrays to store available choices
  - Reading user input with `readline`
  - Using array indexes for decision logic
  - Using `-1` for input validation in the user interface
  - Random computer choice with `Math.floor(Math.random() * 3)`
  - Conditional validation with `if`
  - Output results using `console.log`

### 2. `passwordGenerator.js`
- **Learning focus:** Random string generation and loops.
- **Concepts practiced:**
  - User input with `readline`
  - Defining an alphabet using a constant string
    - Uppercase letters
    - Lowercase letters
    - Numbers and symbols
  - Loop repetition using `for`
  - Random index selection with `Math.floor()` and `Math.random()`
  - Dynamic loop limit based on user input using `parseInt()`

### 3. `inventory.js`
- **Learning focus:** Building a simple inventory management system.
- **System features:**
  - Menu-based interface using `console.log`
  - Option handling using `switch/case`
  - Functions for:
    - `registerProduct`
    - `displayStock`
    - `editProduct`
    - `removeProduct`
    - `findProduct`
- **Array methods used:**
  - `push`
  - `splice`
  - `filter`
  - Index access and updates
- **Notes:**
  - The system is implemented in a single file (non-modularized) to focus on logic and data manipulation.

### 4. `reverseString/`
- **Learning focus:** String manipulation.
- Includes its own README with a brief explanation of the logic used.

### 5. `cesarCipher/`
- **Learning focus:** Basic cryptography concepts.
- Implements a Caesar Cipher algorithm.
- Includes its own README with a brief explanation.

## Tech Stack
- Node.js
- JavaScript

## How to Run
1. Open the terminal in the module directory.
2. Run any script with Node.js:
   ```bash
   node rockPaperScissors.js
   node passwordGenerator.js
   node inventory.js
