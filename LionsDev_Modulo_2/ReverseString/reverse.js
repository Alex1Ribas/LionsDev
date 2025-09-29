const prompt = require('prompt-sync')();

let entrada = prompt("Digite um texto: ");

function ReverseString(nome) {
    // .split separa letra a letra como uma array; reverse inverte a ordem; .join junta novamente as letras em texto
    let finalname = nome.split("").reverse().join("");

    console.log("Texto invertida:", finalname);
    return finalname;
}

function ContarVogais(texto) {
    const vogais = "aeiouAEIOU"; 
    let contador = 0;

    // Loop por cada caractere do texto
    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

//substitui a promessa pela entrada do usuario
let invertida = ReverseString(entrada);//nome vira a entrada
let totalVogais = ContarVogais(entrada);// texto vira a entrada

// Exibe o número de vogais na string original
console.log("Vogais na string original:", totalVogais);