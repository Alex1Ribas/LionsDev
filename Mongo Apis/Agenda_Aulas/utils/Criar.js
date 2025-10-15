const Aulas = require('./schemaAulas');
async function Criar(idProfessor, data, assunto) {
    try {
        const novaAula = new Aulas({
            idProfessor,
            data,
            assunto
        });

        const aulaSalva = await novaAula.save();
        return aulaSalva;

    } catch (error) {
        throw new Error(`Erro ao criar aula: ${error.message}`);
    }
}

module.exports = Criar;
