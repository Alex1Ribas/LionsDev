const { movies } = require("../data/data");

function listMovies(req, res) {
    if (movies.length <= 0) {
        return res.status(404).send({ message: "No movies found in the catalog!" });
    }

    res.status(200).send(movies);
}

module.exports = listMovies;
