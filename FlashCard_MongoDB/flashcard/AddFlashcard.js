const Baralho = require("../baralho/schemaBaralho");
const FlashCard = require("./schemaFlashCards");

const AddFlashCard = async (BaralhoId, pergunta, respota) => {
    try {
        const baralhoEncontrado = Baralho.findById(id)

        if (!baralhoEncontrado) {
            console.error("Error finding Baralho", error.message);
        }
        const newFlashCard = new FlashCard({ BaralhoId, pergunta, respota });
        return await newFlashCard.save();

    } catch (error) {
        console.error("Error add new FlashCard");
        throw error;
    };
};

module.exports = AddFlashCard


