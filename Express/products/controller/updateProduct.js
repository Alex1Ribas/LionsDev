const { products } = require("../data/data")

function updateProduct(req, res){
 const {id} = req.params;
 const {name, category, price, stock, variation} = req.body;

 const choice = products.find(p => p.id == id);

 if(!choice){
    return res.status(404).send({menssage: "Your choice not's found!", id:id})
 }

 choice.name = name;
 choice.category = category;
 choice.price = price;
 choice.stock = stock;
 choice.variation = variation;

 res.status(200).send({menssage: "Your product, now are uptdate!"})
}

module.exports = updateProduct
   
