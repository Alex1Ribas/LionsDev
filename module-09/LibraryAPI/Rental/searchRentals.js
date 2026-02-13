const { rentals } = require("../data/data");

function searchRentals(req, res) {
    const { studentId, bookId, rentalDate, returnDate } = req.query;

    if (!studentId && !bookId && !rentalDate && !returnDate) {
        return res.status(400).send('Provide at least one search parameter.');
    }

    const results = rentals.filter(rental => {
        return (
            (!studentId || rental.studentId.includes(studentId)) &&
            (!bookId || rental.bookId.includes(bookId)) &&
            (!rentalDate || rental.rentalDate.includes(rentalDate)) &&
            (!returnDate || rental.returnDate.includes(returnDate))
        );
    });

    if (results.length === 0) {
        return res.status(404).send('No rentals found!');
    }

    return res.status(200).send(results);
}

module.exports = searchRentals;