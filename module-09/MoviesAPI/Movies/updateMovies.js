const { movies } = require("../data/data");

function updateMovies(req, res) {
    const { id } = req.params;
    const { title, director, year, genre } = req.body;

    const movie = movies.find(m => m.id == id);

    if (!movie) {
        return res.status(404).send({ message: "Movie not found!" });
    }
    
    movie.title = title ;
    movie.director = director;
    movie.year = year;
    movie.genre = genre;

    res.status(200).send({ message: "Movie updated successfully!", movie });
}

module.exports = updateMovies;
