// what's a crud
// C = Create
// R = Read
// U = Update
// D = Delete

// initialize the array
const languages = ["Python", "JavaScript", "Java", "C++", "Ruby"];

// Create
languages.push("Go"); // add "Go" to the end of the array

// Read
console.log(languages); // show the array

// Update
languages[1] = "TypeScript"; // update "JavaScript" to "TypeScript"

console.log(`Bye JS now is : ${languages}`);

// Delete
const deleted = languages.splice(2,3); // remove three elements from the index 2

console.log(deleted)

console.log(languages)