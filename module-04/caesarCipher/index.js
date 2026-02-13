function caesarCipher(text, shift) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        let letterIndex = -1;

        for (let j = 0; j < alphabet.length; j++) {
            if (alphabet[j] === letter) {
                letterIndex = j;
                break;
            }
        }

        if (letterIndex === -1) {
            result += letter;
            continue;
        }

        let newIndex = letterIndex + shift;
        if (newIndex >= alphabet.length) {
            newIndex = newIndex - alphabet.length;
        }
        if (newIndex < 0) {
            newIndex = newIndex + alphabet.length;
        }
        result = result + alphabet[newIndex];
    }

    return result;
}

function removeDuplicates(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (!result.includes(text[i])) {
            result += text[i];
        }
    }
    return result;
}

function countVowels(text) {
    const vowels = 'aeiouAEIOU';
    let total = 0;
    const count = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    const lower = text.toLowerCase();

    for (let j = 0; j < lower.length; j++) {
        if (vowels.includes(lower[j])) {
            switch (lower[j]) {
                case 'a': count.a++; break;
                case 'e': count.e++; break;
                case 'i': count.i++; break;
                case 'o': count.o++; break;
                case 'u': count.u++; break;
                default: break;
            }
            total++;
        }
    }
    return [total, count];
}

const encoded = caesarCipher('hello world', 3);
console.log(caesarCipher('hello world', 3));

const noDuplicates = removeDuplicates(encoded);
console.log(`Text without duplicates: ${noDuplicates}`);

const vowelResult = countVowels(noDuplicates);
console.log(`Vowels: ${vowelResult[0]}`);
console.log(`Per vowel - a: ${vowelResult[1].a} e: ${vowelResult[1].e} i: ${vowelResult[1].i} o: ${vowelResult[1].o} u: ${vowelResult[1].u}`);
