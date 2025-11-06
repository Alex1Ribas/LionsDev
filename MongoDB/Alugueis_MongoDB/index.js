const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const db_uri = process.env.DB_URI;

const app = express();
app.use(express.json());

mongoose.connect(db_uri)
  .then(() => {
    console.log("Conectado ao MongoDB");

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`Servidor rodando na porta: ${port}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err.message);
  });

const rotaLivros = require('./rotas/rotaLivros');
const rotaEstudante = require('./rotas/rotaEstudantes');
const rotaAluguel = require('./rotas/rotaAluguel');

app.use('/livros', rotaLivros);
app.use('/estudantes', rotaEstudante);
app.use('/aluguel', rotaAluguel); // 

app.get('/', (req, res) => {
  res.send('API Locação de Livros');
});


mongoose.connection?.on("error", (error) => {
  console.error(`Erro de conexão MongoDB: ${error.message}`);
});
