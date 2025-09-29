const users = require("./users");

function list(){
    if( users.length <= 0){
        console.log("Nenhum usuario encontrado...");}

        for( let i =0; i < users.length; i++)
console.log(`${i + 1} - ID: ${users[i].id}, Nome: ${users[i].nome}, E-mail: ${users[i].email}, Número: ${users[i].numero}`);
}

module.exports = list