//informa que é para começar a ouvir
let readline = require('readline');
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('calculadora: 1 soma, 2 subt, 3 divs e 4 multi')

    rl.setPrompt("Digite um numero: ");
        rl.prompt();

rl.on('line', (input)=> {
    const opera = parseInt(input)
        if(isNaN(opera)) {
            console.log("Digitite um valor valido")}
                 rl.prompt();

                        rl.on('line', (input)=> {
                            const numer1 = parseInt(input)
                                if(isNaN(numer1)) {
                                    console.log("Digitite um valor valido")}
                                        rl.prompt();
                    
                                            rl.on('line', (input)=> {
                                                 const numer2 = parseInt(input)
                                                    if(isNaN(numer2)){
                                                      console.log("Digitite um valor valido")}
                                                           rl.prompt();
switch(opera){
    case 1 :
        console.log(numer1+numer2);
            break;

    case 2:
        console.log(numer1-numer2);
            break;

    case 3:
        if( numer2 ===0){
            console.log("N/A")}
               else { numer1/numer2};
                 break;

    case 4:
        console.log(numer1*numer2)};

            rl.close();
        });
    });
});
