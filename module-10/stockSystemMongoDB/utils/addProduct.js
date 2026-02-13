const Product = require("./productSchema");

const addProduct = async (name, quantity) => {
    try {
        const newProduct = new Product({ name, quantity });
        return await newProduct.save();
    } catch (error) {
        console.error("Error adding Product:", error.message);
        throw error;
    }
}
module.exports = addProduct;
