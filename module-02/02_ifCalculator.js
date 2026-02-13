const readline = require('readline');

// Interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// print the title of the calculator
console.log("=== If Calculator ===");

// ask the user for the operation
rl.question("Operation (+, -, *, /): ", (operation) => {

  // ask the user for the first number
  rl.question("First number: ", (firstNumber) => {
    const firstValue = parseFloat(firstNumber);

    // ask the user for the second number
    rl.question("Second number: ", (secondNumber) => {
      const secondValue = parseFloat(secondNumber);
      let result;

      // if the operation is chosen, the result is calculated
      if (operation === '+') {
        result = firstValue + secondValue;
      } else if (operation === '-') {
        result = firstValue - secondValue;
      } else if (operation === '*') {
        result = firstValue * secondValue;
      } else if (operation === '/') {
        if (secondValue === 0) {
          result = 'Error: division by zero';
        } else {
          result = firstValue / secondValue;
        }
      // if the operation is not exist, the result is invalid
      } else {
        result = 'Invalid operation';
      }

      // print the result
      console.log(`\nResult: ${result}`);
      rl.close();
    });
  });
});

// when the user closes the calculator, the program exits
rl.on('close', () => process.exit(0));