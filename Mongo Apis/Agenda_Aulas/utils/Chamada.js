async function Chamada (idAula, idAluno, presente){
    try{
        const novaPresenca = new Presencas({
            idAula: idAula,
            idAluno: idAluno,
            presente: presente
        });
        const presencaSalva = await novaPresenca.save();
        return presencaSalva;
    } catch (error) {
        throw new Error(`Erro ao registrar presença: ${error.message}`);
    };
}

module.exports = Chamada;