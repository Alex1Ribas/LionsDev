const { movies } = require("../../data/data")

function addMovies(req, res){
    const {title, director, year, genre} = req.body

    let newMovie = {
        id: id.value,
        title:title,
        director: director,
        year:year,
        genre: genre
    }

    movies.push(newMovie)
    id.value++

    res.status(201).send({message: "A New movie's added sucessfully!"})

}

module.exports = addMovies