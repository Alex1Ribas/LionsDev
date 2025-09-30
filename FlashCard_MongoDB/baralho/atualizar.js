const Baralho = require("./schemaBaralho");

const updateBaralho = async (nome) => {
    try{
        const updateBaralho = await Baralho.findByIdAndUpdate(
            id,
            {nome},
            {new: true, runValidators: true}
        );
        return updateBaralho;
    } catch (error) {
        console.error("Error updating Baralho", error.message);
        throw error;
    }
};

module.exports = updateBaralho
