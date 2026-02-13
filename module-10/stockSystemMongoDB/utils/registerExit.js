const Movement = require("./movementSchema");
const Product = require("./productSchema");

const productExit = async (productId, quantity) => {
    try {
        const product = await Product.findById(productId);

        if (!product) {
            throw new Error("Product not found");
        }

        if (product.quantity < quantity) {
            throw new Error(`Insufficient stock. Available: ${product.quantity}`);
        }

        const newMovement = new Movement({
            productId: productId,
            type: "OUT",
            quantity: quantity,
        });

        await newMovement.save(); 

        // Use $inc with negative quantity to subtract safely
        await Product.findByIdAndUpdate(
            productId,
            { $inc: { quantity: -quantity } },
            { new: true }
        );

        return newMovement;

    } catch (error) {
        console.error("Error registering exit:", error.message);
        throw error;
    }
};

module.exports = productExit;
