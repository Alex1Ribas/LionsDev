const { id, rentals } = require("../data/data");

function addRental(req, res){
    
    if (!req.body.bookId || !req.body.studentId || !req.body.rentalDate) {
        return res.status(400).send({
            message: "Rental Date, Student ID, and Book ID cannot be empty!"});
        };

    const newRental = {
        id: id.value,
        bookId: parseInt(req.body.bookId),
        studentId: parseInt(req.body.studentId),
        rentalDate: req.body.rentalDate,
        returnDate: req.body.returnDate
    };


    rentals.push(newRental);
    id.value++;

    res.status(201).send({ message: "Added successfully!", rental: newRental });
}

module.exports = addRental;