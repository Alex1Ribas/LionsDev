const lerEntrada = require('./entrada');
const verificacao = require('./verificacao');
const adicao = require('./adicao');
const subtrair = require('./subtracao');
const multiplicar = require('./multiplicacao');
const dividir = require('./divisao');

function realizarOperacao(num1, num2, operacao) {
    let resultado;

    switch (operacao) {
        case '+':
            resultado = adicao(num1, num2);
            break;
        case '-':
            resultado = subtrair(num1, num2);
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            break;
        case '/':
            resultado = dividir(num1, num2);
            break;
        default:
            console.log('Operação inválida. Use +, -, *, ou /.');
            return undefined;
    }
    return resultado;
}

const entrada1 = lerEntrada('Digite o primeiro número: ');
const entrada2 = lerEntrada('Digite o segundo número: ');
const operacao = lerEntrada('Digite a operação (+, -, *, /): ');

if (!verificacao(entrada1) && !verificacao(entrada2)) {
    const num1 = parseFloat(entrada1);
    const num2 = parseFloat(entrada2);
    const resultado = realizarOperacao(num1, num2, operacao);

    if (resultado !== undefined) {
        console.log(`Resultado: ${resultado}`);
    }
} else {
    console.log('Entrada inválida. Certifique-se de digitar números.');
}
