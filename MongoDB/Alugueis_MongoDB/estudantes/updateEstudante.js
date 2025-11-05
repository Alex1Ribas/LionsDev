const student = require("./schemaEstudantes");

const updateEstudantes = async (id, nome, curso, ano, matricula) => {
    try{
        const updateEstudantes = await student.findByIdAndUpdate(
            id,
            {nome, curso, ano, matricula},
            {new: true, runValidators: true}
        );
        return updateEstudantes;
    } catch (error){
        console.error("Error to update", error.message);
        throw error;
    }
};

module.exports = updateEstudantes;