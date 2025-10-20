const { estudantes } = require("../data/data");

function buscarEstudantes(req, res) {
    const { nome, curso, matricula } = req.query;

    if (!nome && !curso && !matricula) {
        return res.status(400).send('Informe pelo menos um parâmetro de busca.');
    }

    const resultados = estudantes.filter(estudante => {
        return (
            (!nome || (estudante.nome && estudante.nome.toLowerCase().includes(nome.toLowerCase()))) &&
            (!curso || (estudante.curso && estudante.curso.toLowerCase().includes(curso.toLowerCase()))) &&
            (!matricula || (estudante.matricula && estudante.matricula.toString().includes(matricula)))//toString() para conseguir usar o includes()
            //parametro verdadeiro || condição se falso o && funciona para verificar os outros parametros
        );
    });

    if (resultados.length === 0) {
        return res.status(404).send('Nenhum estudante encontrado!');
    }

    return res.status(200).send(resultados);
}

module.exports = buscarEstudantes;
