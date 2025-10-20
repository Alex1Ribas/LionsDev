const express = require('express');
const router = express.Router();

const Criar = require('./Criar');
const listAulas = require('./listAulas');
const updateAula = require('./update');
const deleteAula = require('./remove');
const Chamada = require('./Chamada');

//////////////////////////////////////////////////////////// POST
router.post("/Criar", async (req, res) => {
    const {idProfessor, data, assunto} = req.body;
    const novaAula = await Criar(idProfessor, data, assunto);
    res.status(201).send(novaAula);
});
//////////////////////////////////////////////////////////// GET
router.get("/Listar/:idProfessor", async (req, res) => {
    const {idProfessor} = req.params;
    const aulas = await listAulas(idProfessor);
    res.status(200).send(aulas);
});
//////////////////////////////////////////////////////////// PUT

router.put("/Atualizar/:id", async (req, res) => {
    const {id} = req.params;
    const {assunto} = req.body;
    const aulaAtualizada = await updateAula(id, assunto);
    res.status(200).send(aulaAtualizada);
});
////////////////////////////////////////////////////////////// DELETE
router.delete("/Deletar/:id", async (req, res) => {
    const {id} = req.params;
    await deleteAula(id);
    res.status(200).send({message: "Aula deletada com sucesso."});
});
////////////////////////////////////////////////////////////// POST PRESENÇA
router.post("/Chamada/:idAula", async (req, res) => {
    const {idAula, presenca} = req.body;
    const novaPresenca = await Chamada(idAula, presenca);
    res.status(201).send({message: "Presnça registrada com sucesso", presenca: novaPresenca});
});

module.exports = router;