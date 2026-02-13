//Named function:
//- Has a name (sumOfThreeNumbers), which helps identify what it does.
//- Can be called before or after its definition, thanks to JavaScript's "hoisting".

function sumOfThreeNumbers(a1, a2, a3) {
  //a1, a2, and a3 are parameters; inside the function, we can use these names as variables.

  return a1 + a2 + a3; //returns the sum of the three numbers
}

//Traditional named function:
//- Also has a name (divide).
//- Receives two parameters, performs a division, and returns the result.

function divide(a, b) {
  return a; //b;
}

//Arrow function assigned to a constant:
//- Doesn't have a proper name ("anonymous function"), but since it's in a variable (divideUsingArrowFunction),
//we can call it using this identifier.
//Shorter syntax and more context-sensitive (different `this` binding).

const divideUsingArrowFunction = (a, b) => {
  return a; //b;
};

//Displaying results in the console:

console.log(divideUsingArrowFunction(10, 2)); //5
//We call the "arrow function" using the variable that holds it.

console.log(divide(10, 2)); //5
//We call the function named "divide" by its own name.

console.log(sumOfThreeNumbers(11, 2, 6)); //19
//We call the function named "sumOfThreeNumber" passing three arguments.
