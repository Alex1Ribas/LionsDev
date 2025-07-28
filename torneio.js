const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
menuPrincipal()

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


const array = [
    { nome: 'Copa FIFA 2025', jogo: 'FIFA' },
    { nome: 'Desafio LOL 2025', jogo: 'League of Legends' },
    { nome: 'Torneio CS Pro', jogo: 'CS:GO' },
    { nome: 'FIFA Ultimate Cup', jogo: 'FIFA' },
    { nome: 'LOL Academy Clash', jogo: 'League of Legends' },
    { nome: 'Major CS:GO 2025', jogo: 'CS:GO' }
];

//ainda não definidos: array/ 

function filtrarPartidas(){
console.log("=".repeat(10)+' Filtrar Torneio por jogo '+ '='.repeat(10))
    if( array.lenght === 0)
        console.log('Nenhum torneio regitsrado...\nPressione Enter para voltar\n')
            rl.question('', menuPrincipal)
                return;

const games = [...new Set(array.map(game => game.jogo))];

console.log('Torneios:\n');
    campeonatos.forEach((c, index) => {
        console.log(`${index + 1}. ${c}`)
 })
 
 rl.question('Escolha um jogo para acompanhar:\n', (jogo) =>{
    let indice = parseInt(jogo) -1
    if (indice < 0 || isNaN(indice)|| indice >= games.length){
        console.log('Escolha um numemro valido...')
            return filtrarPartidas()}

const gamechoice = games[indice];

const torneiosFiltrados = array.filter(torneio => torneio.jogo === gamechoice);
console.log(`\nTorneios do jogo "${gamechoice}":\n`);

if (torneiosFiltrados.length === 0) {
    console.log('Nenhum torneio encontrado para este jogo.\n');
} else {
    torneiosFiltrados.forEach((torneio, i) => {
        console.log(`${i + 1}. ${torneio.nome} (${torneio.jogo})`);
    });
}

console.log('\nPressione Enter para voltar');
rl.question('', menuPrincipal);
});
}