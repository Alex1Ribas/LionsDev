let populacaoA = 8000
const crescimento = 0.03
let populacaoB = 200000
const crescimento2 = 0.0015


while (populacaoA < populacaoB){ //Condição para o que aconteça
    populacaoA += populacaoA * crescimento //

    populacaoB += populacaoB * crescimento2
    anos++
}
console.log(`A população da cidade A em ${Math.floor(anos)} anos com ${populacaoA} habitatantes vai passar a cidade B com ${Math.floor(populacaoB)} habitantes`)
