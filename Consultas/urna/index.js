const prompt = require('./utils/prompt')
const cadastro = require('./utils/cadastro')
const votacao = require('./utils/votacao')
const apuracao = require('./utils/apuracao')

menu()
function menu(){
    console.log(`
                 U R N A

1.CADASTRAR CANDIDATO       3.APURAÇÃO

2.REGISTRAR VOTAÇÃO         4.SAIR
`)

let opcao = prompt('Escolha uma opção: ')

switch (opcao) {
    case '1': cadastro(); menu();
    break
    case '2': votacao(); menu();
    break
    case '3': apuracao(); menu()
    break
    case '4': console.log("encerrando...\n"); process.exit();
    break
    default: console.log('Escolha uma opção do menu... '); menu()
}
}