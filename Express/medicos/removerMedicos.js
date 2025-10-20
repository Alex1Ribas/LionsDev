const { medicos } = require("../data/data")

function removerMedicos(req, res) {
    const {id} = req.params
    const idInt = parseInt(id)

    let index = medicos.findIndex(medico => medico.id === idInt)

    if (index === -1) {
        return res.status(404).send({message: "ID não encontrado!"})
    }

    medicos.splice(index, 1)
       return res.status(200).send({message: "Médico removido"})
    }

module.exports = removerMedicos