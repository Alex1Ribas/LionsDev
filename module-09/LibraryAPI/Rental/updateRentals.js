const { rentals } = require("../../data/data");

function updateRentals(req, res){

    const { id } = req.params;
    const newBookId = req.body.bookId;
    const newStudentId = req.body.studentId;
    const newRentalDate = req.body.rentalDate;
    const newReturnDate = req.body.returnDate;


    const rental = rentals.find((a) => a.id == id);

    if(!rental){
        return res.status(404).send({ message: "Rental not found!" });
    }

   rental.bookId = newBookId;
   rental.studentId = newStudentId;
   rental.rentalDate = newRentalDate;
   rental.returnDate = newReturnDate;
    
    res.status(200).send({
        message: "The rental has been updated successfully!",
        rental: rental,
    });
};

module.exports = updateRentals;