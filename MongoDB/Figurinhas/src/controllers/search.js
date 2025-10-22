const Figurinha = require('../data/SchemaFigurinha');

async function serach(numero, tema){
    try{
        const foundFigurinhas = await Figurinha.find({ numero: numero, tema: tema });
        return foundFigurinhas;
    } catch(error){
        console.error('Erro ao buscar figurinhas:', error.message);
        throw error;
    };
};
module.exports = serach;