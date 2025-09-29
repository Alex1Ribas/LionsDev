const prompt = require('./prompt')
const users = require('./users')
const list = require('./list')

function update() {
    list()

    let opcao = prompt('Qual usuário deseja atualizar: ')
    let idEscolhido = parseInt(opcao)

    let index = users.findIndex(user => user.id === idEscolhido)
    if (index === -1) {
        console.log('Usuário não encontrado.')
        return
    }

    let novoNome = prompt('Nome atualizado: ')
    let novoEmail = prompt('E-mail atualizado: ')

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === novoEmail) {
            console.log('Este e-mail já está em uso.')
            return
        }
    }

    let novoNumero = prompt('Número atualizado: ')
    users[index].nome = novoNome
    users[index].email = novoEmail
    users[index].numero = novoNumero

    console.log('Usuário atualizado com sucesso.')
}

module.exports = update
