const {pacientes, id } = require("../data/data");

function adicionarPacientes(req, res) {
    id.value++;
    
    const novoPaciente = {
        id: id.value,
        nome: req.body.nomePaciente,
        dataNascimento: req.body.dataNascimento
    };

    pacientes.push(novoPaciente);

    res.status(201).send({
        message: "Novo Paciente adicionado com sucesso!",
        paciente: novoPaciente
    });
}

module.exports = { adicionarPacientes };
