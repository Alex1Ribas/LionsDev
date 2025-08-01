const arrayTorneio = require("../data/arrayTorneio")
const {askQuestion} = require("./askQuestion")

// TODO/ Refatorar codigo de RL para askQuestion
function filtrarPartidas(){
console.log("=".repeat(10)+' Filtrar Torneio por jogo '+ '='.repeat(10))
    if( torneios.length === 0){
        console.log('\nBuscando... '.repeat(3) + '\nNenhum torneio regitsrado...\n\nPressione Enter para voltar\n')
            rl.question('', menuPrincipal)
                return;
    }   

    const games = [...new Set(torneios.map(game => game.jogo))];
    console.log('Torneios:\n');
    games.forEach((c, index) => {
        console.log(`${index + 1}. ${c}`)
    })

    rl.question('\nEscolha um jogo para acompanhar:\n', (jogo) =>{
    let indice = parseInt(jogo) -1
    if (indice < 0 || isNaN(indice)|| indice >= games.length){
        console.log('Escolha um numemro valido...')
        return filtrarPartidas()
    }

    const gamechoice = games[indice];
    const torneiosFiltrados = torneios.filter(torneio => torneio.jogo === gamechoice);
    console.log('=-'.repeat(30) + `\n Torneios do jogo "${gamechoice}":\n`);

    if (torneiosFiltrados.length === 0) {
        console.log('Nenhum torneio encontrado para este jogo.\n');
    } else {
        torneiosFiltrados.forEach((torneio, i) => {
        console.log(`${i + 1}. ${torneio.nome} (${torneio.jogo})`);
        });
    }

    console.log('=-'.repeat(30) + '\nPressione Enter para voltar');
    rl.question('', menuPrincipal);
    });
}