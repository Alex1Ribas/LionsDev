const Aulas = require('./schemaAulas');
async function listAulas(idProfessor){
    try{
        if (!idProfessor){
            throw new Error('ID do professor é obrigatório.');
        };

        const aulas = await Aulas.findById(idProfessor);
        return aulas;
    } catch (error) {
        throw new Error(`Erro ao listar aulas: ${error.message}`);
    }
};

module.exports = listAulas;