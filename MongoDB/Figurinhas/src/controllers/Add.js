const Figurinha = require('../data/SchemaFigurinha');

async function Add(numero, tema){
    try{
    const newFigurinha = await Figurinha.create({numero, tema});
    return newFigurinha;
    } catch(error){
        console.error('Erro ao adicionar figurinha:', error.message);
        throw error;
    };
};
module.exports = Add;
