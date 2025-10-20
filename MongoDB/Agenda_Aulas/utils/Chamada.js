const Presencas = require('./schemaPresenca')

async function Chamada (idAula, presenca){
    try{
        const novaPresenca = new Presencas({idAula, presenca});
        return await novaPresenca.save();

    } catch (error) {
        
        throw new Error(`Erro ao registrar presença: ${error.message}`);
    };
}

module.exports = Chamada;