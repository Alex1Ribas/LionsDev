//chamar modulos exportados
const prompt = require("./prompt")
const contatos = require("./contatos")
const listarContatos = require("./listarContatos")

function removerContatos(){
listarContatos();

const remocao = parseInt(prompt('Escolha qual contato apagar: '))-1;
if ( isNaN(remocao) || remocao < 0){ // verificação de opção valida usando como base o listar contatos
    console.log("escolha uma opçao valida!")
    return;
} 
contatos.splice(remocao,1);// apartir do item escolhido "remocao" vai apagar 1 item ou seja apenas um objeto
console.log(`Contato apagado com sucesso!!`)


}

module.exports = removerContatos