//importação dos modulos
const prompt = require("./modulos/prompt")
const adicionarContato = require("./modulos/adicionarContato")
const atualizarContatos = require("./modulos/atualizarContatos")
const listarContatos = require("./modulos/listarContatos")
const removerContatos = require("./modulos/removerContatos")

function menuPrincipal(){ // cria a função menu principal
console.log(`
 -=-=-=-=-=-=-=-=-=-=-=-
|          Menu         |
|                       |
| 1- Adicionar Contatos |
|                       |
| 2- Lista de Contatos  |
|                       |
| 3- Atualizar Contato  |
|                       |
| 4- Apagar Contato     |  
|                       |
| 5- Sair               |
 -=-=-=-=-=-=-=-=-=-=-=-
`);

const opcao = prompt("O que deseja fazer: ")

switch (opcao) { //faz uma operação chamando uma função de acordo com a escolha do usuario
    case '1':
        adicionarContato()
    menuPrincipal();
        break;
    case '2':
        listarContatos();
    menuPrincipal();
        break;
    case '3':
        atualizarContatos();
    menuPrincipal()
        break;
    case '4':
          removerContatos();
    menuPrincipal();
            break;
    case '5':
        process.exit()
            break;
    default:
            console.log('Opção inválida!');
    menuPrincipal();
            }
        }
            menuPrincipal();
