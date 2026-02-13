const Baralho = require("./schemaBaralho")

const listBaralho = async () => {
    try{
        return await Baralho.find();
    } catch (error){
        console.error("Error finding Baralho", error.message);
        throw error;
    }
};

module.exports = listBaralho