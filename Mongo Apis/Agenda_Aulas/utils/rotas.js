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

router.put("/Atualizar/:idAula", async (req, res) => {
    const {idAula} = req.params;
    const {data, assunto} = req.body;
    const aulaAtualizada = await updateAula(idAula, data, assunto);
    res.status(200).send(aulaAtualizada);
});
////////////////////////////////////////////////////////////// DELETE
router.delete("/Deletar/:idAula", async (req, res) => {
    const {idAula} = req.params;
    await deleteAula(idAula);
    res.status(200).send({message: "Aula deletada com sucesso."});
});
////////////////////////////////////////////////////////////// POST PRESENÇA
router.post("/Chamada/:idAula", async (req, res) => {
    const {idAula} = req.query;
    const {idAluno, presente} = req.body;
    const novaPresenca = await Chamada(idAula, idAluno, presente);
    res.status(201).send(novaPresenca);
});

module.exports = router;