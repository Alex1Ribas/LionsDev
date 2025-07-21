// 1. Criar uma string com todos os caracteres possíveis para a senha
const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?';

// 2. Importar o módulo 'readline' para poder ler o que o usuário digita no terminal
const readline = require('readline');

// 3. Criar uma interface de leitura (para entrada e saída no terminal)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 4. Perguntar ao usuário o tamanho da senha
rl.question('Digite o tamanho da sua senha:\n', (input) => {

    // 5. Converter o valor digitado (que vem como string) para número
    let tamanho = parseInt(input);

    // 6. Criar uma variável vazia que vai receber os caracteres sorteados
    let senha = '';

    // 7. Repetir o sorteio de caracteres até atingir o tamanho da senha desejado
    for (let i = 0; i < tamanho; i++) {
        // 7.1 Gerar um número aleatório entre 0 e o tamanho do alfabeto
        let aleatorio = Math.floor(Math.random() * alfabeto.length);

        // 7.2 Pegar o caractere correspondente ao número aleatório e adicionar na senha
        senha += alfabeto[aleatorio];
    }

    // 8. Mostrar a senha gerada para o usuário
    console.log(`Sua senha é:\n${senha}`);

    // 9. Encerrar a interface de leitura
    rl.close();
});
