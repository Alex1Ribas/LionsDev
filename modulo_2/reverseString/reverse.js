const prompt = require('prompt-sync')();

const input = prompt("Enter some text: ");

function reverseString(str) {
    const reversed = str.split("").reverse().join("");
    console.log("Reversed text:", reversed);
    return reversed;
}

function countVowels(text) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }
    return count;
}

const reversed = reverseString(input);
const totalVowels = countVowels(input);
console.log("Vowels in the original string:", totalVowels);
