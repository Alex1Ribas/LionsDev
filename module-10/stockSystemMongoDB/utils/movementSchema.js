const mongoose = require("mongoose");

const MovementSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['IN', 'OUT'],
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }, 
},{
    timestamps: true
});

const Movement = mongoose.model("Movement", MovementSchema);
module.exports = Movement;
