const { gerarId, products } = require("../data/data")

function addProduct(req, res){
    const {name, variation, category, price, stock} = req.body

    let newProdcut = {
        id: gerarId(),
        name:name,
        variation: variation,
        category: category,
        price:price,
        stock: stock
    }

    products.push(newProdcut)

    res.status(201).send({message: "A New product's added sucessfully!"})

}

module.exports = addProduct