const { log } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}

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
let torneios = []
let torneio = {
    nomeTorneio : "IEM",
    jogo : "CS",
    data : "28/07/2025",
    participantes : ["Furia", "Liquid", "Mouz", "Mongolz", "Vitality"],
    partidas : [ ]
}
torneios.push(torneio)

async function registrarPartida() {
    console.log("=-".repeat(20));
    
    for (let i = 1; i <= torneios.length; i++) {
        console.log(`${i} : ${torneios[i-1].nomeTorneio} , ${torneios[i-1].jogo}, ${torneios[i-1].data}`);
    }

    let idTorneio = await askQuestion("Selecione o ID do Torneiro: ")
    let qtsJogadores = await askQuestion("Qual a Quantidade de Jogadores: ")
    let jogadores = []
    // let data = await askQuestion("Informe a Data: ")
    for (let i = 0; i < qtsJogadores; i++) {
        jogadores.push(await askQuestion("Nickname do Jogador ou Equipe: "))
    }
    let ganhador = await askQuestion("Ganhador da Partida: ")
    let partida = {
        jogadores : jogadores,
        // data : data,
        ganhador : ganhador
    }
    torneios[idTorneio-1].partidas.push(partida);    
    console.log("Partida Salva! ")
    menuPrincipal();
}

async function listarPartidas() {
    for (let i = 0; i < torneios.length; i++) {
        console.log("=-".repeat(20));
        console.log(`Torneio ${torneios[i].nomeTorneio}`);
        console.log("=-".repeat(20));
        for (let y = 0; y < torneios[i].partidas.length; y++) {
            console.log(`Partida #${y+1}`);
            for (let z = 0; z < torneios[i].partidas[y].jogadores.length; z++) {
                console.log(`Jogadores/Equipes : ${torneios[i].partidas[y].jogadores[z]}`)
            }
            console.log(`Data: | Ganhador: ${torneios[i].partidas[y].ganhador}`);
            console.log("-".repeat(25));
            
        }
    }
    menuPrincipal()
}

menuPrincipal()
