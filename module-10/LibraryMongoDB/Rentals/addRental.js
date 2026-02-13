const Rentals = require("./schemaRentals");

async function addRental(req, res){
    try {
        const data = req.body;
        if (!data.bookId || !data.studentId || !data.rentalDate) {
            return res.status(400).send({
                message: "No valid information found!"
            });
        };

        const newRental = await Rentals.create({
            bookId: data.bookId,
            studentId: data.studentId,
            rentalDate: data.rentalDate,
            returnDate: data.returnDate
        });
        res.status(201).send({ message: "Added successfully!", rental: newRental });
    } catch (error) {
        console.error("Error adding rental:", error);
        res.status(500).send({ message: "Internal server error." });
    }
}
module.exports = addRental;
