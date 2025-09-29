const { pacientes } = require("../data/data")

function removerPacientes(req, res) {
    const {id} = req.params
    const idInt = parseInt(id)

    let index = pacientes.findIndex(paciente => paciente.id === idInt)

    if (index === -1) {
        return res.status(404).send({message: "ID não encontrado!"})
    }

    pacientes.splice(index, 1)
       return res.status(200).send({message: "Paciente removido"})
    }

module.exports = removerPacientes