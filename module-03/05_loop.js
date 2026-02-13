const readline = require("readline");

const myArray = [1, 2, 3, 4, 5];

// =================================
// 1. TRADITIONAL FOR LOOP
// =================================
// The for loop is structured with three parts:
// - Initialization: let i = 0 (declares and initializes the control variable)
// - Condition: i < myArray.length (checks if to continue)
// - Increment: i++ (executes after each iteration)
// It is ideal when you know how many times you will repeat
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// =================================
// 2. INDIVIDUAL LOGS (WITHOUT LOOPS)
// =================================
// Here each element is accessed manually by index
// Not efficient for large arrays
// Shows how it would be without using loops
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);

// The while loop checks the condition BEFORE executing the block
// The control variable must be declared and initialized BEFORE the loop
let e = 0; // CORRECTION: initialize
while (e < myArray.length) {
  console.log(myArray[e]);
  e++;
}

// 4. DO-WHILE LOOP (NO ERRORS)

// The do-while loop executes the block AT LEAST ONCE, then checks the condition
let d = 0; // CORRECTION: initialize with 0
do {
  console.log(myArray[d]);
  d++;
} while (d < myArray.length);

// =================================
// 5. FOREACH - ARRAY METHOD
// =================================
// The forEach method is specific to arrays
// Doesn't need a control variable or index checking
// Executes the function for each element of the array
// More readable and less prone to errors
myArray.forEach((element) => {
  console.log(element);
});

// SUMMARY OF MAIN DIFFERENCES:

/* FOR:
- Complete structure in one line
- Ideal when you know the number of iterations
- Local control variable within the loop

WHILE:
- Checks condition BEFORE executing
- May never execute if the condition is initially false
- More flexible for complex conditions

DO-WHILE:
- Executes AT LEAST ONCE
- Checks condition AFTER executing
- Useful when you need to execute at least once

FOREACH:
- Specific method for arrays
- Cleaner and more readable
- Does not give direct access to the index (only to the element)
- Cannot be interrupted with break
*/
