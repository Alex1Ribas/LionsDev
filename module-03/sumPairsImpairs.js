// Initial staus of counts
let totalPairs = 0;
let totalImpairs = 0;
let sumPairs = 0;
let sumImpairs = 0;

// Iterates through all numbers from 0 to 999
for (let i = 0; i <= 999; i++) {
  // Se o resto da divisão por 2 for zero, é um número par
  if (i % 2 === 0) {
    sumPairs += i; // Adiciona o valor atual à sum de pairs
    totalPairs++; // Incrementa o contador de pairs
  } else {
    sumImpairs += i; // Adiciona o valor atual à sum de Impairs
    totalImpairs++; // Incrementa o contador de Impairs
  }
}

// Calcula a Avarage aritmética de cada grupo
const avaragePairs = sumPairs / totalPairs;
const avarageImpairs = sumImpairs / totalImpairs;

// print  result on console
console.log(`Total of number pairs: ${totalPairs}`);
console.log(`Total of number Impairs: ${totalImpairs}`);
console.log(`sum of numbers pairs: ${sumPairs}`);
console.log(`sum of numbers Impairs: ${sumImpairs}`);
console.log(`Avarage aritmética of pairs: ${avaragePairs}`);
console.log(`Avarage aritmética of Impairs: ${mediaImpairs}`);

// Compare the sums and say if they are equal.
if (sumImpairs > sumPairs) {
  console.log(
    `A sum of Impairs (${sumImpairs}) gran then pairs (${sumPairs}).`,
  );
} else if (sumPairs > sumImpairs) {
  console.log(
    `A sum of pairs (${sumPairs}) gran then impairs (${sumImpairs}).`,
  );
} else {
  console.log("As sums are avarage.");
}
