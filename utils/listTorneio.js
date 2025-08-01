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
// TODO/ Refatorar os rl.question pora askQuestion
module.exports = listarTorneio