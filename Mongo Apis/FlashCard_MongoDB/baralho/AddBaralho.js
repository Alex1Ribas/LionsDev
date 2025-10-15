const Baralho = require("./schemaBaralho");

const addBaralho = async (nome) => {
    try {
        const newBaralho = new Baralho({ nome });
        return await newBaralho.save();
    } catch (error) {
        console.error("Erro creating Baralho", error.message);
        throw error;
    }
}

module.exports = addBaralho