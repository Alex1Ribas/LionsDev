const express = require('express');
const router = express.Router();

const listEstudantes = require('../estudantes/listEstudantes');
const addEstudante = require('../estudantes/addEstudante');
const updateEstudantes = require('../estudantes/updateEstudante');
const deleteEstudantes = require('../estudantes/deleteEstudante');
const buscarEstudantes = require('../estudantes/buscarEstudantes');

router.get('/', async (req, res) =>{
    const students = await listEstudantes();
    res.status(200).send(students);
});
///////////////////////////////////////
router.get('/busca', buscarEstudantes);

///////////////////////////////////////
router.post('/', async (req, res) =>{
    const { nome, curso, ano, matricula } = req.body;
    const newStuden = await addEstudante(nome, curso, ano, matricula);
    res.status(201).send({message: "Student creat sucessfully!"})
});

///////////////////////////////////////
router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {nome, curso, ano, matricula} = req.body;
    const updateEstudante = await updateEstudantes(id, nome, curso, ano, matricula);
    if (updateEstudante){
        res.status(200).send({message: "Studants has update sucessfully!"});
    } else {
        res.status(404).send({ message: "Studants not found"})
    }
});

///////////////////////////////////////

router.delete('/:id', async (req, res) =>{
    const {id} = req.params;
    const deleteEstudante = await deleteEstudantes(id);
    if (deleteEstudante){
        res.status(200).send({message: "The Student return to dust"});
    } else {
        res.status(404).send({message: "The Student not found"});
    }
});

module.exports = router;