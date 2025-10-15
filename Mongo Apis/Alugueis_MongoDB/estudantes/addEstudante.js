const student = require("./schemaEstudantes");

const addEstudantes = async (nome, curso, ano, matricula) => {
    try{
        const newstudent = new student({nome, curso, ano, matricula});
        return await newstudent.save();
    } catch (error){
        console.error("Erro to create a student:", error.message);
        throw error;        
    }
}

module.exports = addEstudantes