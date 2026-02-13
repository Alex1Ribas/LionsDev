const candidate = require("./candidate");
const voters = require('./voters')
const prompt = require('./prompt')

function voting(){
    console.log('\ Start voting\n');
    
const voterName = prompt('Enter your full name: ')
const birthYear = prompt('Your birth year with 4 digits: ')

if(2025 - parseInt(birthYear) < 18){console.log('You cannot vote yet...'); return;}

for(let i = 0; i < voters.length; i++)
    if(voterName === voters[i].name && birthYear === voters[i].birthDate){ console.log('It is not possible to vote again!'); return}



if(candidate.length <= 0){console.log('No candidates registered...'); return;}

for (let j = 0; j < candidate.length; j++){
console.log(`
    ${candidate[j].number}. candidate: ${candidate[j].name} - Party: ${candidate[j].acronym}
    `);}
    acronym
const vote = prompt('Enter the candidate number: ')

for( let k = 0; k < candidate.length; k++){
    if(parseInt(vote) === candidate[k].number){
        candidate[k].votes++
    console.log('\nThank you for voting!\n');
    break
    }
}

voters.push({
    id: Date.now(),
    name: voterName,
    birthDate: birthYear,
    vote: vote
})
}

module.exports = voting