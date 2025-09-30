const Baralho = require("./schemaBaralho")

const deleteBaralho = async (id) => {
    try {
        return await Baralho.findById(id);
    } catch (error) {
        console.error("Error to find Baralho", error.message);
        throw error;
    }
};

module.exports = deleteBaralho