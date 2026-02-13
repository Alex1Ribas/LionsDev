const readInput = require('./input');
const validate = require('./validation');
const add = require('./addition');
const subtract = require('./subtraction');
const multiply = require('./multiplication');
const divide = require('./division');

function performOperation(num1, num2, operation) {
    let result;

    switch (operation) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            console.log('Invalid operation. Use +, -, *, or /.');
            return undefined;
    }
    return result;
}

const input1 = readInput('Enter the first number: ');
const input2 = readInput('Enter the second number: ');
const operation = readInput('Enter the operation (+, -, *, /): ');

if (!validate(input1) && !validate(input2)) {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    const result = performOperation(num1, num2, operation);

    if (result !== undefined) {
        console.log(`Result: ${result}`);
    }
} else {
    console.log('Invalid input. Make sure you enter numbers.');
}
