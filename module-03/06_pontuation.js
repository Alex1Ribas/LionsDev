const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt();

rl.question('Enter your first test score: ', (input1) => {
    const array = [];
    let average;
    const test1 = parseFloat(input1);
    array.push(test1);

    rl.question('Enter the second test score: ', (input2) => {
        const test2 = parseFloat(input2);
        array.push(test2);
        const sum = array[0] + array[1];
        average = sum / array.length;

        rl.close();
        console.log(`Your average is: ${average}`);
    });
});
