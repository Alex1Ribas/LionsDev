const { products } = require("../data/data");

function listProduct(req,res){
    if( products.length <=0){
        return res.status(404).send({message: "not products found!"})
    };

    const productList = products.map(p =>({
        id: p.id,
        name:p.name,
        variation: p.variation,
        category: p.category,
        price: p.price,
        stock: p.stock
    }));

    res.status(200).send(productList)
}

module.exports = listProduct
