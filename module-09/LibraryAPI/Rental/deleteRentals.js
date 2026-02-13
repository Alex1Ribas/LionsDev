const { rentals } = require("../../data/data");

function deleteRentals(req, res){
    const { id } = req.params;
    const index = rentals.findIndex((rental) => rental.id == parseInt(id));

    if (index === -1) {
        return res.status(404).send({ message: "Rental not found!"});
    }

    if(!rentals[index].returnDate){
        return res.status(400).send({message: "Book not returned, removal of the rental is not allowed"})
    }
    
    const deleted = rentals.splice(index, 1)[0];
    res
    .status(200)
    .send({ message: "Rental deleted successfully!", rental: deleted});
};

module.exports = deleteRentals;