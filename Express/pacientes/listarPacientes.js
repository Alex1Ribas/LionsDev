const { pacientes } = require("../data/data");

function listarPacientes(req, res){
    if(pacientes.length <= 0){
        return res.status(404).send({message: "Nenhum paciente encontrado"})}

    res.status(200).send(pacientes);
}
module.exports = listarPacientes