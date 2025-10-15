async function remove(idAula) {
    try{
        const removed = await Aulas.findByIdAndDelete(idAula);
        return removed;
    } catch (error) {
        throw new Error(`Erro ao deletar aula: ${error.message}`);
    }
};

module.exports = remove;