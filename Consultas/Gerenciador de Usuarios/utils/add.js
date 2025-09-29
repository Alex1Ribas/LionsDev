const users = require('./users')
const prompt = require('./prompt')

function add(){
let nome = prompt('Nome do Usuario: ')

let email = prompt('E-mail do Usuario: ')
for( let i = 0; i < users.length; i++)
        if (users[i].email === email){
        console.log('email já cadastrado, tente novamente');
        return }
    
let numero = prompt('Número do Usuario: ')
if(isNaN(numero)|| numero < 0){
     console.log('\n Não é um numero'); 
     return}

    users.push({
        id: Date.now(),
        nome: nome,
        email:email,
        numero: numero
        })
    return;
}

module.exports = add