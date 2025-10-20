const express = require('express');
const app = express()
const port = 3000;

app.use(express.json());

const router = require('./routes/routeMovies');

app.use('/movies', router)

app.get('/', (req, res) => {
    res.send('API movies');
  });
  
  app.listen(port, () => {
    console.log(`Servidor rodando na porta:${port}`);
  });