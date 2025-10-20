const prompt = require("./prompt"); //chamando o modulo para receber a entrada do usuario
const contatos = require("./contatos");//chamando a array para armazenar o objeto criado pela funcção

function adicionarContato() { //cria a função
    const nome = prompt("Digite o nome do contato: ");// grava a entrada do usuario como uma variavel chamada nome
    const telefone = prompt("Digite o telefone: ");// grava a entrada do usuario como uma variavel chamada telefone
    const email = prompt("Digite o e-mail: "); // grava a entrada do usuario como uma variavel chamada email

    const contato = {
        nome,
        telefone,
        email
    }; //cria o objeto, que vamos manipular

    contatos.push(contato); // adiciona o objeto dentro da array

    console.log("Contato adicionado com sucesso!!") // saida da mensagem informando que deu certo
}

module.exports = adicionarContato; // exporta para ser usado em outros lugares
