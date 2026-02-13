const prompt = require('./prompt')
const add = require('./add')
const list = require('./list');
const update = require('./update');
const remove = require('./remove')

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
    
