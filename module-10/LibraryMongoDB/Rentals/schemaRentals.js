const mongoose = require('mongoose')

const RentalsSchema = new mongoose.Schema({
    bookId: {type: String, required: true},
    studentId: {type: String, required: true},
    rentalDate: {type: String, required: true},
    returnDate: {type: String}
});
const Rentals = mongoose.model("Rentals", RentalsSchema)

module.exports = Rentals
