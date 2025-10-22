const Figurinha = require('../data/SchemaFigurinha')

async function update(id, numero, tema) {
    try {
        const updatedFigurinha = await Figurinha.findByIdAndUpdate(id, { numero, tema }, { new: true });
        return updatedFigurinha;
    } catch (error) {
        console.error('Erro ao atualizar figurinha:', error.message);
        throw error;
    };
};

module.exports = update;