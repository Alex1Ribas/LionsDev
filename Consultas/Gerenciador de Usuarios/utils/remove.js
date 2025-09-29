const users = require('./users')
const prompt = require('./prompt')
const list = require('./list')

function remove() {
    list()

    let escolha = prompt('Selecione um ID que deseja apagar: ')
    let choice = parseInt(escolha)

    let index = users.findIndex(user => user.id === choice)

    if (index === -1) {
        console.log('ID não encontrado.')
        return
    }

    let confirma = prompt(`Deseja realmente apagar o ID ${choice}? (s/n): `)
    if (confirma.toLowerCase() === 's') {
        users.splice(index, 1)
        console.log(`Usuário com ID ${choice} foi removido.`)
    } else {
        console.log('Ação cancelada.')
    }
}

module.exports = remove