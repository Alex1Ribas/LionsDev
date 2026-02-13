const Baralho = require("../baralho/schemaBaralho");
const FlashCard = require("./schemaFlashCards");

const AddFlashCards = async (BaralhoId, pergunta, resposta) => {
    try {
        const baralhoEncontrado = Baralho.findById(BaralhoId)

        if (!baralhoEncontrado) {
            console.error("Error finding Baralho", error.message);
        }
        const newFlashCard = new FlashCard({ BaralhoId, pergunta, resposta });
        return await newFlashCard.save();

    } catch (error) {
        console.error("Error add new FlashCard");
        throw error;
    };
};

module.exports = AddFlashCards


