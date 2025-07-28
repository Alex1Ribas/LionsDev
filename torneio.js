const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menuPrincipal(){
    console.log(`
    ====== E-SPORTS MENU ======
    1. Adicionar Torneio
    2. Listar Torneios
    3. Registrar Partida
    4. Listar Partidas
    5. Filtrar Torneios por Jogo
    6. Remover Torneio
    7. SAIR
`)

rl.question('\n Escolha uma opção acima:\n', (input1)=>{
    let menu = parseInt(input1)
switch (menu){
    case 1:
        adicionarTorneio();
        break;
    case 2:
        listarTorneio();
        break;
    case 3: 
        registrarPartida();
        break;
    case 4:
        listarPartidas();
        break;
    case 5:
        filtrarPartidas();
        break;
    case 6:
        removerTorneio();
        break;
    case 7:
        rl.close();
        break;
    default:
        console.log("Digite um número Valido...")
        menuPrincipal();
        break;
        }
    })
    
}