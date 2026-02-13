const { rentals: rentalsData } = require("../data/data");

async function addReturn(req, res) {
    try {
        const { id } = req.params;
        const { returnDate: newReturn } = req.body;

        if (!newReturn) {
            return res.status(400).send({ message: "Return date is required! (ISO)" });
        }

        const rental = rentalsData.find((r) => r.id == id);

        if (!rental) {
            return res.status(404).send({ message: "Rental not found!" });
        }

        if (rental.returnDate.trim() !== "") {
            return res.status(400).send({ message: "Book already returned" });
        }

        const validation = checkDate(rental.rentalDate, newReturn);

        if (!validation) {
            return res.status(400).send({ message: "Return date is before the rental date!" });
        }

        rental.returnDate = newReturn;

        return res.status(200).send({
            message: "The return was successful!",
            rental: rental,
        });

    } catch (error) {
        console.error("Error registering return:", error);
        return res.status(500).send({ message: "Internal server error." });
    }
}

function checkDate(rentalDate, returnDate) {
    const rental = new Date(rentalDate);
    const returning = new Date(returnDate);
    return returning > rental;
}

module.exports = addReturn;
