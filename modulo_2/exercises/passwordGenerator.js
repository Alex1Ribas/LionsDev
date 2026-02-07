// Character set for the password
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?';

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the desired password length:\n', (input) => {
    const length = parseInt(input, 10);
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        password += alphabet[randomIndex];
    }

    console.log(`Your password is:\n${password}`);
    rl.close();
});
