const student = require("./schemaEstudantes");

const addEstudantes = async (nome, curso, ano, matricula) => {
  try {
    const newstudent = await student.create({
      nome,
      curso,
      ano,
      matricula,
    });
    return newstudent;
  } catch (error) {
    console.error("Erro to create a student:", error.message);
    throw error;
  }
};

module.exports = addEstudantes;
