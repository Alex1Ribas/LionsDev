const { medicos } = require("../data/data");

function listarMedicos(req, res){
    if(medicos.length <= 0){
        return res.status(404).send({message: "Nenhum médico encontrado"})}

    res.status(200).send(medicos)
}
module.exports = listarMedicos