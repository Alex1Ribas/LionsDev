const { rentals } = require("../data/data");

function addReturn(req, res){

    const { id } = req.params;
    const newReturnDate = req.body.returnDate;

    if(!newReturnDate){
        return res.status(404).send({message: "Return date is required! (ISO format)"})
    }

    const rental = rentals.find((a) => a.id == id);

    if(!rental){
        return res.status(404).send({ message: "Rental not found!" });
    }

if(rental.returnDate.trim() !== ""){
    return res.status(400).send({message: 'Book already returned'})
};

 const validation = checkDate(rental.rentalDate, newReturnDate)
 
 if(validation){

   rental.returnDate = newReturnDate;
    
     return res.status(200).send({
        message: "The return was successfully completed!",
        rental: rental,
    });
} 
return res.status(400).send({message: "Return date cannot be earlier than the rental date!"})
};

function checkDate(rentalDate, returnDate){
    const rental = new Date(rentalDate);
    const returnDay = new Date(returnDate);
    if(returnDay > rental){
        return true
    }
    return false
}

module.exports = addReturn;