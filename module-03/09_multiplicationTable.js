const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Multiplication table');
console.log('-----------');

rl.question('Enter which number you need the table for: ', (input) => {
    const number = parseInt(input, 10);

    for (let i = 0; i < 11; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
    process.exit();
});
