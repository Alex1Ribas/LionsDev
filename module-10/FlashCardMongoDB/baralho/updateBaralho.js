const Baralho = require("./schemaBaralho");

const updateBaralho = async (id,nome) => {
    try{
        const updated = await Baralho.findByIdAndUpdate(
            id,
            {nome},
            {new: true, runValidators: true}
        );
        return updated;
    } catch (error) {
        console.error("Error updating Baralho", error.message);
        throw error;
    }
};

module.exports = updateBaralho
