const myTable = ["Mayra", "Clara", "Lucky", "Mariane", "Filipe"]

console.log(`My name is ${myTable[4]}, my colleagues are: ${myTable[0]}, ${myTable[1]}, ${myTable[2]}, ${myTable[3]}`);

//Let's add another colleague to the table Push
// Remove the first element from the table
// And delete an element from the middle of the table

myTable.push("Gustavo");
console.log(`Now my table consists of: ${myTable}`);

myTable.shift(); // Remove the first element
console.log(`After removing the first element, my table consists of: ${myTable}`);

const middle = myTable.splice(2, 1); // Remove the middle element
console.log(`After removing the middle element, my table consists of: ${myTable}`);
console.log(`The element removed from the middle was: ${middle}`);