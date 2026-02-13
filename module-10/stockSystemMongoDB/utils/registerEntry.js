const Movement = require("./movementSchema");
const Product = require("./productSchema");

const productEntry = async (productId, quantity) => {
    try {
        const product = await Product.findById(productId);

        if (!product) {
            console.error("Error: Product not found");
            return;
        }

        const newMovement = new Movement({
            productId: productId,
            type: "IN",
            quantity: quantity,
        });

        await newMovement.save(); 

        await Product.findByIdAndUpdate(
            productId,
            { $inc: { quantity: quantity } },
            { new: true }
        );

        return newMovement;
    } catch (error) {
        console.error("Error registering entry:", error.message);
        throw error;
    }
};

module.exports = productEntry;
