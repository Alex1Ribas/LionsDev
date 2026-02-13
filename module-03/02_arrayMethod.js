// Array methods in JavaScript
// 1 - Push  - used to add one or more elements to the end of an array.
// 2 - Pop - used to remove the last element of an array
// 3 - Shift - used to remove the first element of an array.
// 4 - Unshift - used to add one or more elements to the beginning of an array.
// 5 - Splice - used to add or remove elements from an array at a specific position.
// 6 - Slice - used to extract a part of an array without modifying the original array.
// 7 - Includes - used to check if an array contains a specific element.
// 8 - IndexOf - used to find the index of a property in an array.
// 9 - Length - used to get the size of an array, or how many elements it contains.

// 1 - Push //

const exampleArray = [1, 2, 3, 4, 5];

exampleArray.push(6); // add the number 6 to the end of the array

console.log(exampleArray);

// 2 - Pop //
const mainCharacters = ["Harry", "Hermione", "Ron"];

mainCharacters.pop(); // remove the last element of the array (Ron)

console.log(mainCharacters);

// 3 - Shift //
const newMainCharacters = ["Minato", "Naruto", "Obito"];

newMainCharacters.shift(); // remove the first element of the array (Naruto)

console.log(newMainCharacters);

// 4 - Unshift //
const moreMainCharacters = ["Sasuke", "Sakura"];
moreMainCharacters.unshift("Kakashi"); // add Kakashi to the beginning of the array
console.log(moreMainCharacters);

// 5 - Splice //
const cars = ["Ferrari", "Bmw", "Audi", "Toyota", "Honda"];
cars.splice(0, 2); // from the index 0, remove 2 elements from the array
console.log(cars); // ['Audi', 'Toyota', 'Honda']

cars.splice(0, 0, "Mercedes", "Lamborghini"); // A partir do índice 0, adiciona 'Mercedes' e 'Lamborghini' sem remover nenhum elemento
console.log(cars);

cars.splice(2, 1, "Porsche"); // from the index 2, remove 1 element and add 'Porsche'
console.log(cars);

// 6 - Slice //
const fruits = ["Apple", "Banana", "Orange", "Grape", "Pear"];
const fruitsSelected = fruits.slice(1, 3); // select the elements from the index 1 to the index 3 (not include the 3);
console.log(fruitsSelected); // ['Banana', 'Orange']

// 7 - Includes //
const numbers = [1, 2, 3, 4, 5];
const containsThree = numbers.includes(3); // check if the number 3 is in the array
console.log(contemTres); // true

let mainCharactersShrek = ["Prince Charmig", "Fiona"];
if (mainCharactersShrek.includes("Prince Charming")) {
  console.log("The movie is Shrek 2 or 3");
}

// 8 - IndexOf //
const animals = ["Dog", "Cat", "Bird", "Fish"];
const indexOfCat = animals.indexOf("Cat"); // return the index of the element 'Cat'
console.log(indexOfCat); // 1

// 9 - Length //
const numbersArray = [10, 20, 30, 40, 50];
const sizeOfArray = numbersArray.length; // return the size of the array
if (sizeOfArray >= 5) {
  console.log(`The array is large and has ${sizeOfArray} elements.`);
}
