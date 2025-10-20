const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let vida = 10;
let numero = Math.floor((Math.random() * 31 ));

console.log("Jogo de Adivinhação\n----------------");

rl.setPrompt("Digite Seu palpite: ");
rl.prompt();

rl.on("line", (input) => {
    const palpite = parseInt(input);

    if (palpite > numero) {
        console.log("dica: mais baixo");
    } else if (palpite < numero) {
        console.log("dica: mais alto");
    } else if (numero === palpite) {
        console.log(`Parabéns você acertou o numero! O numero era: ${numero}`);
        process.exit();
    }

    if (vida > 0) {
        vida = vida - 1;
        console.log("------------------");
        console.log("Que pena, tente novamente! Um número de 0 a 30 vida(" + vida + ")");
    } else {
        console.log("Game over");
        rl.close();
    }
});

