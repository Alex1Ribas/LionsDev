async function updateAula(idAula, data, assunto) {
    try {
        const aulaAtullizada = await Aulas.findByIdAndUpdate(idAula, data, assunto, { new: true });
        return aulaAtullizada;
    } catch (error) {
        throw new Error(`Erro ao atualizar aula: ${error.message}`);
    };
};

module.exports = updateAula;