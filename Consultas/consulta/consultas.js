const prompt = require('./prompt')
let consultas = []

function setConsulta(){
    let dia = prompt('Data da consulta: ')
    let idmedico = prompt("Identificação do Médico (id): ")
    let idpaciente = prompt('Identificação do Paciente (id): ')
    let descricao = prompt('Descrição da consulta: ')
consultas.push({
    data : dia,
    medico : idmedico,
    paciente : idpaciente,
    descricao : descricao
})
}
console.log(data, idmedico, idpaciente, descricao);

module.exports = setConsulta