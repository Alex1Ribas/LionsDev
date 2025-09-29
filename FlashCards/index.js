const atualizarBaralho = require('./baralho/atualizar');
const criarBaralho = require('./baralho/criar');
const listarBaralho = require('./baralho/listarBaralho');
const removerBaralho = require('./baralho/remover');
const remove = require('./flashcard/remover');
const atualizarFlash = require('./flashcard/atualizar');
const buscaPorBaralho = require('./flashcard/buscarPorBaralho');
const buscarPorPergunta = require('./flashcard/buscarPorPergunta')
const criarFlashCard = require('./flashcard/criar');
const listarAll = require('./flashcard/listarAll');
const listarFlashCardPorBaralho = require('./flashcard/listarFlashCardPorBaralho');
const prompt = require('./prompt/prompt')

Menu()
function Menu(){
    console.log(`
----------------------------------- MENU ------------------------------------
|1. Criar  Baralho       | 6.  Atualizar  Baralho   | 11. Remover FlashCard |
|2. Criar  FalshCard     | 7.  Atualizar  FalshCard | X. Sair               |
|3. Listar Baralho       | 8.  Buscar por Baralho   |                       |
|4. Listar FalshCard     | 9.  Buscar     FlashCard |                       |
|5. Listar por Baralho   | 10. Remover    Baralho   |                       |
-----------------------------------------------------------------------------

`);

let escolha = prompt('Escolha uma opção: ')

switch (escolha) {
    case '1':
        criarBaralho(); Menu();
        break;
    case '2':
        criarFlashCard(); Menu();
        break;
    case '3':
        listarBaralho(); Menu();
        break;
    case '4':
        listarAll(); Menu();
        break
    case '5':
        listarFlashCardPorBaralho(); Menu();
        break
    case '6':
        atualizarBaralho();Menu();
        break
    case '7':
        atualizarFlash();Menu();
    case '8':
        buscaPorBaralho(); Menu();
        break
    case '9':
        buscarPorPergunta(); Menu();
        break
    case '10':
        removerBaralho();Menu();
        break
    case '11':
        remove(); Menu();
        break
    case 'x':
    case 'X':
        console.log('\n Saindo...\n');
        process.exit();

    default:
        console.log('Entrada invalida, tente novamente!');
        Menu()
        break;
    }
}