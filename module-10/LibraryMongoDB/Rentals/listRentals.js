const { rentals: rentalsData } = require("../data/data");

function listRentals(req, res) {
  if (rentalsData.length === 0) {
    return res.status(404).send({ message: "No rentals found" });
  }

  const rentalData = rentalsData.map(rental => ({
    bookId: rental.bookId,
    studentId: rental.studentId,
    rentalDate: rental.rentalDate,
    returnDate: rental.returnDate
  }));

  res.status(200).send(rentalData);
}

module.exports = listRentals;
