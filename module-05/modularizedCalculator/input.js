const prompt = require('prompt-sync')();

function readInput(message) {
    return prompt(message);
}

module.exports = readInput;
