const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lives = 10;
let number = Math.floor((Math.random() * 31));

console.log("Guessing Game\n----------------");

rl.setPrompt("Enter your guess: ");
rl.prompt();

rl.on("line", (input) => {
    const guess = parseInt(input, 10);

    if (guess > number) {
        console.log("Hint: lower");
    } else if (guess < number) {
        console.log("Hint: higher");
    } else if (number === guess) {
        console.log(`Congratulations, you got it! The number was: ${number}`);
        process.exit();
    }

    if (lives > 0) {
        lives = lives - 1;
        console.log("------------------");
        console.log("Too bad, try again! Number from 0 to 30. Lives: " + lives);
    } else {
        console.log("Game over");
        rl.close();
    }
});
