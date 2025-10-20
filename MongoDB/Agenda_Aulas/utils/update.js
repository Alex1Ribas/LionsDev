const Aulas = require('./schemaAulas')

async function updateAula(id, assunto) {
    try {
        const aulaAtullizada = await Aulas.findByIdAndUpdate(id, {assunto: assunto}, { new: true });
        return aulaAtullizada;
    } catch (error) {
        throw new Error(`Erro ao atualizar aula: ${error.message}`);
    };
};

module.exports = updateAula;