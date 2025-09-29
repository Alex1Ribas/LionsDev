const contatos = require("./contatos"); //chama a array
const prompt = require("./prompt"); //chama biblioteca para usar a entrada do usuario
const listarContatos = require("./listarContatos"); //chama a função modularizada

function atualizarContato() { //cria a função
    listarContatos(); // chama a função importada

    const atualizar = parseInt(prompt("Selecione o ID do contato que deseja atualizar: ")-1); // nova variavel convertida para numero interiro recebendo a entrada de usuario e reduzindo para pegar a posição correta do item

    if (isNaN(atualizar) || atualizar < 0 || atualizar >= contatos.length) { // verificação se existe o indice escolhido e se digitou um numro
        console.log("Contato não localizado, tente novamente!"); // saida informando o erro
        return;
    }

    const novoNome = prompt("Nome atualizado: ");
    const novoTelefone = prompt("Telefone atualizado: ");
    const novoEmail = prompt("E-mail atualizado: ");
//contantes responsaveis por armazenar os novos dados informados pelo usuario
    contatos[atualizar] = {// dentro da array vai localizar o item selecionada e fazer a substituição abaixo
        nome: novoNome,
        telefone: novoTelefone,
        email: novoEmail
    };

    console.log("Contato atualizado com sucesso!!");
}

module.exports = atualizarContato;
