const { movies } = require("../data/data");

function deleteMovies(req, res) {
    const { id } = req.params;
    const index = movies.findIndex(m => m.id == id);

    if (index === -1) {
        return res.status(404).send({ message: "Movie not found!" });
    }

    const deletedMovie = movies.splice(index, 1);

    res.status(200).send({ message: "The movie has been removed from the catalog!" });
}

module.exports = deleteMovies;
