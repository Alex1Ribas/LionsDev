const prompt = require('./utils/prompt')
const register = require('./utils/register')
const voting = require('./utils/voting')
const countingVotes = require('./utils/countingVotes')

menu()
function menu(){
    console.log(`
                Voting System

1.REGISTER CANDIDATE       3.COUNTING VOTES

2.REGISTER VOTE            4.EXIT
`)

let opcao = prompt('Escolha uma opção: ')

switch (opcao) {
    case '1': register(); menu();
    break
    case '2': voting(); menu();
    break
    case '3': countingVotes(); menu()
    break
    case '4': console.log("Logout...\n"); process.exit();
    break
    default: console.log('Please make a choice on menu... '); menu()
}
}
