const express = require("express");
const mongoose = require("mongoose");
const  dotenv = require("dotenv");

dotenv.config();
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;

mongoose.connect(
   `mongodb+srv://${db_user}_db_user:${db_password}@cluster0.dnupdb2.mongodb.net/?retryWrites=true&w=majority`)

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
