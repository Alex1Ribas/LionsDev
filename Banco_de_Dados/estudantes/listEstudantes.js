const student = require("./schemaEstudantes");

const listEstudantes = async () => {
  try{
    return await student.find();
  } catch(error){
    console.error("Error to find students");
    throw error;
  }
};

module.exports = listEstudantes