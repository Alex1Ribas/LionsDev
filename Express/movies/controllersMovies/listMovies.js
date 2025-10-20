const { movies } = require("../../data/data");

function listMovies(req, res){
    if (movies.length <= 0){
        return res.status(404).send({message: "Movie's not found!"})
    };

    const moviesList = movies.map(movie => ({
        title: movie.title,
        director: movie.director,
        year: movie.year,
        genre: movie.genre
    }));

    res.status(200).send(moviesList);
}

module.exports = listMovies