const choices = ['Rock', 'Paper', 'Scissors'];

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('--- 1-Rock, 2-Paper, 3-Scissors.... 4-Exit \n');
rl.prompt();

rl.on('line', (input) => {
    const userChoice = parseInt(input, 10) - 1;
    const computerChoice = Math.floor(Math.random() * 3);

    if (userChoice >= 3) {
        console.log('You exited.');
        rl.close();
    } else if (
        (userChoice === 0 && computerChoice === 2) ||
        (userChoice === 1 && computerChoice === 0) ||
        (userChoice === 2 && computerChoice === 1)
    ) {
        console.log(`You win! You chose ${choices[userChoice]}\nComputer lost choosing ${choices[computerChoice]}`);
        rl.prompt();
    } else {
        console.log(`You lose! Computer chose ${choices[computerChoice]} and\nyou chose ${choices[userChoice]}.`);
        rl.prompt();
    }
});
