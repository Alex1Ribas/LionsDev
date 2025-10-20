const student = require("./schemaEstudantes");

const deleteEstudantes = async (id)=> {
    try{
        return await student.findByIdAndDelete(id);
    } catch (error) {
        console.error("Error, student not deleted!", error.message);
        throw error;      
    }
};

module.exports = deleteEstudantes;