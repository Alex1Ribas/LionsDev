const Figurinha = require('../data/SchemaFigurinha');

async function List(){
    try{
    const listFigurinhas = await Figurinha.find();
    return listFigurinhas;
    } catch (error){
        console.error('Erro ao listar figurinhas:', error); 
        throw error;
    };
};
module.exports = List;