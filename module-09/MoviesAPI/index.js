const express = require('express');
const app = express()
const port = 3000;

app.use(express.json());

const moviesRoutes = require('./routes/routeMovies');

app.use('/movies', moviesRoutes);

app.get('/', (req, res) => {
    res.send('Movies API');
  });
  
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });