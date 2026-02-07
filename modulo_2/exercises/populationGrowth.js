// Population growth: how many years until city A surpasses city B?

let populationA = 8000;
const growthA = 0.03;
let populationB = 200000;
const growthB = 0.0015;
let years = 0;

while (populationA < populationB) {
    populationA += populationA * growthA;
    populationB += populationB * growthB;
    years++;
}

console.log(`In ${Math.floor(years)} years, city A will have ${Math.floor(populationA)} inhabitants and surpass city B with ${Math.floor(populationB)} inhabitants.`);
