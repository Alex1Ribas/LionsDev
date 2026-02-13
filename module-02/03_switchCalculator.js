const readline = require('readline');

// Interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// print the title of the calculator
console.log("=== Switch Calculator ===");
 
// ask the user for the operation
rl.question("Choose the operation (+, -, *, /): ", function (operation) {
  // ask the user for the first number
  rl.question("Enter the first number: ",  (firstNumber) => {
    const firstNumber = parseFloat(firstNumber);
    // ask the user for the second number
    rl.question("Enter the second number: ",  (secondNumber) => {
      const secondNumber = parseFloat(secondNumber);

    // let the result be undefined yet
    let result;

// Choice menu for math operations with switch statement
      switch (operation) {
        case '+':
          result = firstNumber + secondNumber;
          break;// break the switch statement
        case '-':
          result = firstNumber - secondNumber;
          break;
        case '*':
          result = firstNumber * secondNumber;
          break;
        case '/':
          if (secondNumber === 0) {
            result = "Error: division by zero!";
          } else {
            result = firstNumber / secondNumber;
          }
          break;
        default:// default case if the operation is not valid
          result = "Invalid operation!";
      }

    // print the result
    console.log(`\nResult: ${result}`);

    // close the readline interface
    rl.close();
  });
});
});

// when the user closes the calculator, the program exits
rl.on('close', () => process.exit(0));