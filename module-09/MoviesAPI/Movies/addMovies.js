const { movies, id } = require("../data/data");

function addMovies(req, res) {
    const { title, director, year, genre } = req.body;

    id.value++;
    const newMovie = {
        id: id.value,
        title,
        director,
        year,
        genre
    };

    movies.push(newMovie);

    res.status(201).send({ 
        message: "A new movie was added successfully!", 
        movie: newMovie 
    });
}

module.exports = addMovies;
