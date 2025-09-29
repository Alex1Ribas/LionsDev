const { consultas } = require("../data/data");

function ListarConsultas(req, res){
    if(consultas.length <= 0){
        return res.status(404).send({message: "Nenhum médico encontrado"})}

    res.status(200).send(consultas)
}
module.exports = ListarConsultas