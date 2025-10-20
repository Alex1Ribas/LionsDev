const Aulas = require('./schemaAulas')
async function Criar(idProfessor, data, assunto) {
    try {
        const aulaSalva = await Aulas.create({
            idProfessor,
            data,
            assunto
        });
        
        return aulaSalva;

    } catch (error) {
        throw new Error(`Erro ao criar aula: ${error.message}`);
    }
}

module.exports = Criar;