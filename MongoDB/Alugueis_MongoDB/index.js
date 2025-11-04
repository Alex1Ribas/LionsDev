const express = require("express");
const mongoose = require("mongoose");
const  dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.DB_URI)

const app = express();
const port = 3000;

  app.use(express.json());

const rotaLivros = require('./rotas/rotaLivros');
const rotaEstudante = require('./rotas/rotaEstudantes');
const rotaAluguel = require('./rotas/rotaAluguel');

  app.use('/livros', rotaLivros);
  app.use('/estudantes', rotaEstudante);
  app.use('/Aluguel', rotaAluguel);

  app.get('/', (req, res) => {
    res.send('API Locação de Livros');
});

  app.listen(port, () => {
    console.log(`Servidor rodando na porta:${port}`);
});


  mongoose.connection.once("open", () =>{
    console.log("conectando ao mongoDB");
});
  mongoose.connection?.on('error', (err) =>{
    console.error(`Error to connect - MongoDB: Error: ${error.message}`);
})
