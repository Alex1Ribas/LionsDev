const Movement = require('./movementSchema')
const getHistory = async (productId) => {
    try {
        if (!productId) {
            throw new Error("Product ID not provided");
        };

        const movements = await Movement.find({ productId: productId });
        return movements;

    } catch (error) {
        console.error("Error fetching history:", error.message);
        throw error;
    }
};

module.exports = getHistory;
