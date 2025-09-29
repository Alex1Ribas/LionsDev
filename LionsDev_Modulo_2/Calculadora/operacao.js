function realizarOperacao(num1, num2, operacao){
    let resultado;

    switch (operacao){
        case '+':
            resultado = num1 + num2 
            break;
        case '-':
            resultado = num1 - num2
            break;
        case '/':
            if( num2 === 0){
                console.log('não se divide por zero')
                return undefined
            }
            resultado = num1 / num2
            break;
        case '*':
            resultado = num1 * num2
            break;
        default:
            console.log('Operação invalida, selecione uma: + , - , / ou * ')
            return realizarOperacao()
    }
    return resultado
}

module.exports = realizarOperacao