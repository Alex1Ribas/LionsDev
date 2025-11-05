const express = require("express");
const router = express.Router();

const listEstudantes = require("../estudantes/listEstudantes");
const addEstudante = require("../estudantes/addEstudante");
const updateEstudantes = require("../estudantes/updateEstudante");
const deleteEstudantes = require("../estudantes/deleteEstudante");
const buscarEstudantes = require("../estudantes/buscarEstudantes");

//////////////////////////////////////// list
router.get("/", async (req, res) => {
  const students = await listEstudantes();
  res.status(200).send(students);
});
/////////////////////////////////////// Search
router.get("/:id", async (req, res) => {
  try {
    const Search = await buscarEstudantes(id);
    res
      .status(200)
      .json({ message: "Estudante encontrado com sucesso:", Search: Search });
  } catch (error) {
    return res.status(404).json({ message: "Estudante nao encontrado!" });
  }
});

/////////////////////////////////////// Add
router.post("/", async (req, res) => {
  const { nome, curso, ano, matricula } = req.body;
  const newStuden = await addEstudante(nome, curso, ano, matricula);
  res
    .status(201)
    .send({ message: "Student creat sucessfully!", newStuden: newStuden });
});

/////////////////////////////////////// Update
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, curso, ano, matricula } = req.body;
  const updateEstudante = await updateEstudantes(
    id,
    nome,
    curso,
    ano,
    matricula
  );
  if (updateEstudante) {
    res.status(200).send({ message: "Studants has update sucessfully!" });
  } else {
    res.status(404).send({ message: "Studants not found" });
  }
});

/////////////////////////////////////// Delete

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleteEstudante = await deleteEstudantes(id);
  if (deleteEstudante) {
    res.status(200).send({ message: "The Student return to dust" });
  } else {
    res.status(404).send({ message: "The Student not found" });
  }
});

module.exports = router;
