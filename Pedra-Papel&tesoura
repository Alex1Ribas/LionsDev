const pedra = [
    'Pedra', 'Papel', 'Tesoura'
];

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

rl.setPrompt('---1-Pedra, 2-Papel e 3-Tesouuura....4-Sair \n')
    rl.prompt()

rl.on('line', (input) => {
    let escolha_usuario = parseInt(input) - 1
        let computer = Math.floor(Math.random() * 3)

     if (escolha_usuario >= 3){
        console.log('Voce saiu...')
       rl.close();
    } else if (
        escolha_usuario === 0 && computer === 2||
        escolha_usuario === 1 && computer === 0 ||
        escolha_usuario === 2 && computer === 1
){
    console.log(`Parabens você ganhou! Escolhendo ${pedra[escolha_usuario]} \no computador perdeu escolhendo ${pedra[computer]}`);
} else {
    console.log(`Você perdeu! Computador escolheu ${pedra[computer]} e \nvocê escolheu ${pedra[escolha_usuario]}.`);
    return rl.prompt();
    };
});
