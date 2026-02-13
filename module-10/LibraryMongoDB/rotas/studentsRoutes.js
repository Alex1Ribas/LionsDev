const express = require("express");
const router = express.Router();

const listStudents = require("../Students/listStudents");
const addStudent = require("../Students/addStudent");
const updateStudent = require("../Students/updateStudent");
const deleteStudent = require("../Students/deleteStudent");
const searchStudents = require("../Students/searchStudents");

router.get("/", async (req, res) => {
  const students = await listStudents();
  res.status(200).send(students);
});

router.get("/search", async (req, res) => {
  try {
    const results = await searchStudents(req, res);
    // searchStudents já lida com o envio da resposta no arquivo original
  } catch (error) {
    return res.status(500).json({ message: "Error during search" });
  }
});

router.post("/", async (req, res) => {
  const { name, course, year, registration } = req.body;
  const newStudent = await addStudent(name, course, year, registration);
  res.status(201).send({ message: "Student created successfully!", student: newStudent });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, course, year, registration } = req.body;
  const updated = await updateStudent(id, name, course, year, registration);
  if (updated) {
    res.status(200).send({ message: "Student has updated successfully!" });
  } else {
    res.status(404).send({ message: "Student not found" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await deleteStudent(id);
  if (deleted) {
    res.status(200).send({ message: "The Student returned to dust" });
  } else {
    res.status(404).send({ message: "The Student not found" });
  }
});

module.exports = router;
