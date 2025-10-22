const Figurinha = require('../data/SchemaFigurinha');

async function remove(id){
    try{
        const deletedFigurinha = await Figurinha.findByIdAndDelete(id);
        return deletedFigurinha;
    } catch(error){
        console.error('Erro ao remover figurinha:', error.message);
        throw error;
    };
};
module.exports = remove;