const Aulas = require('./schemaAulas')

async function remove(id) {
    try{
        const removed = await Aulas.findByIdAndDelete(id);
        return removed;
    } catch (error) {
        throw new Error(`Erro ao deletar aula: ${error.message}`);
    }
};

module.exports = remove;