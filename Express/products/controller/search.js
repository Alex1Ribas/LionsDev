function search(){
    const {name, price, variation} = req.query

    if(!name && !price && !variation){
        return res.status(400).send({message: "Os parametros precisam ser preenchidos"})
    }

 if(!name || )
}

//parametros
//eles foram preenchidos?
// se eles foram preenchidos eles existem na busca?