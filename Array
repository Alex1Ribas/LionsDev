let readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

rl.prompt()

rl.question(' digite a sua primeria nota da prova: ', (input1) => {
    const notas = []
    let media
    let prova1 = parseFloat(input1)
    notas.push(prova1)

    rl.question('Digiite a nota da segunda prova: ', (input2) => {
        let prova2 = parseFloat(input2)
        notas.push(prova2)
        let soma = notas[0] + notas[1]
        media = soma / notas.length

        rl.close(
            console.log(`sua media foi: ${media}`)

        )
    })

})
