const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let torneios = [];

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

async function adicionarTorneio(){
    let participantes = [];
    let nome = await askQuestion('Digite o nome do torneio: ');
    let jogo = await askQuestion('Digite o nome do jogo: ');
    let data = await askQuestion('Digite a data do torneio: ');
    let condition = true;
    while(condition){
        let participante = await askQuestion('Escreva o nome de um participante: ');
        participantes.push(participante);
        let addMais = await askQuestion("Deseja inserir participantes? (S/N)");
        if (addMais.toUpperCase() == "S") {
            continue;
        } else {
            condition = !condition;
        }
    }

    let torneio = {
        nome,
        jogo,
        data,
        participantes
    }

    torneios.push(torneio);
    menuPrincipal();
    console.log('Torneio Registrado!!!');
}

function listarTorneio(){
    for(let i=0; i<torneios.length; i++){
        console.log('========== LISTAGEM DE TORNEIOS ==========');
        console.log(`${i + 1} - Nome: ${torneios[i].nome}, Jogo: ${torneios[i].jogo}, Data: ${torneios[i].data}`);
        console.log('Participantes: ');
        for(let j=0; j<torneios[i].participantes.length; j++){
            console.log(`${j + 1} - ${torneios[i].participantes[j]}`);
        }
    }
    console.log('Pressione ENTER para voltar...');
    rl.question('', menuPrincipal);
}

menuPrincipal();