const { products } = require("../data/data");

function deleteProduct(req, res){
    const {id} = req.params;

    const index = products.findIndex(p => p.id == id)

    if(index === -1){
        return res.status(404).send({message: "Your product aren't here!"})
    }

    products.splice(index, 1);
    res.status(200).send({message:"Your product are returns to dust!", product: products[index]})
}

module.exports = deleteProduct