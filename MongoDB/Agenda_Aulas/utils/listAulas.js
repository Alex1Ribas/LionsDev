const Aulas = require('./schemaAulas');
async function listAulas(idProfessor){
    try{
        if (!idProfessor){
            throw new Error('ID do professor é obrigatório.');
        };

        const AulaEncontrada = await Aulas.find({idProfessor: idProfessor});
        return AulaEncontrada;
    } catch (error) {
        throw new Error(`Erro ao listar aulas: ${error.message}`);
    }
};

module.exports = listAulas;