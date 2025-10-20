const { movies } = require("../../data/data");

function deleteMovies(req, res){
    const { id } = req.params;

    const index = movies.findIndex(m => m.id == id)

    if(index === -1){
        return res.status(404).send({message: "Your choice's not found!"})
    }

    movies.splice(index, 1);

    res.status(200).send({message: "A movie's return to dust!"})
}

module.exports = deleteMovies