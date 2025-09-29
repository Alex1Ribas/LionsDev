const prompt = require('../utils/prompt')
const add = require('../utils/add')
const list = require('../utils/list');
const update = require('../utils/update');
const remove = require('../utils/remove')

menu()
    function menu(){
        console.log(`
        === MENU ===
    1. Adicionar Usuario
    2. Listar Usuarios
    3. Atualizar Usuario
    4. Remover Usuario
    5. Sair
    `);
    
    let opcao = prompt('Escolha uma opção: ')
    switch (opcao){
        case '1':
        add(); menu();
        break
        case '2':
        list(); menu();
        break
        case '3':
        update(); menu();
        break
        case '4':
        remove(); menu();
        break
        case '5':
        console.log('Saindo.....\n');
        process.exit()
        break
        default:
            console.log('Opção invalida');
        break
        }
    }
    