const contatos = require("./contatos"); // chamo a array para manipulação

function listarContatos() { // crio a função
    if (contatos.length === 0) { // verifico se tem alguma coisa na array
        console.log("Não há contatos cadastrados"); //saida do retorno da verificação
        return; // interrempe o codigo
    }

    contatos.forEach((contato, index) => { //laço de repetição para array onde passa por cada objeto no caso contato e sua posição index
        console.log(` \nID: ${index + 1}\n Nome: ${contato.nome}\n Telefone: ${contato.telefone}\n Email: ${contato.email}`); //saida mostrando as variaveis definidas dentro do objeto
    });
}

module.exports = listarContatos; // exporta para ser usado em outros lugares
