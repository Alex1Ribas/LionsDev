
let string = "Hello, dev!";   
let number = 23;           
let boolean = false;        
let undefined;                     
let empty = null;           

let variable = 50;
const unique = "01001-000";
{
  var old = "still works, but be careful!";
}
console.log(old);

let value1 = 10, value2 = 3;
console.log(value1 + value2);
console.log(value1 % value2);

let pizzaSlices = 8;
let friends = 3;
let eatingSlices = 2;
let leftover = pizzaSlices - friends * eatingSlices;
console.log(`Leftover slices: ${leftover}`);

let nome = "Ana";
let idade = 25;
console.log(`${nome} is ${idade} years old.`);

console.log(10 == "10");
console.log(10 === "10");

let hasInvite = true;
let isVIP = false;
let canEnter = hasInvite && isVIP;
let canEnterAlternative = hasInvite || isVIP;
console.log("Can enter (AND)?", canEnter);
console.log("Can enter (OR)?", canEnterAlternative);

let drankCoffee = true;
let hasTicket = true;
let canParticipate = drankCoffee && hasTicket;
console.log("Can participate in the marathon?", canParticipate);

// 7) Summary
// — Strings: texts  
// — Numbers: calculations  
// — Booleans: decisions  
// — let/const: who keeps values  
// — +, -, *, /, %: everything  
// — ===, !==: compare exactly  
// — &&, ||, !: join and separate truths  
