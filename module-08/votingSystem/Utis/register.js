const prompt = require('./prompt')
const candidate = require('./candidate')

function register(){
console.log('   Register candidate  \n');

const name = prompt('Full name: ')
const number = prompt('Number of the vote: ')
const party = prompt('Name of party: ')
const acronym = prompt('Acronym of party: ')

candidate.push({
    id : Date.now(),
    name : name,
    number: number,
    party : party,
    acronym : acronym,
    votes: 0
})
console.log('\n Regrister sucessfully!\n');
}

module.exports = register
