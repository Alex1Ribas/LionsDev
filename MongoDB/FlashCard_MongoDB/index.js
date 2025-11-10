const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const db_uri = process.env.DB_URI;

const app = express();
app.use(express.json());

mongoose.connect(db_uri)
const port = 3000;


const Baralho = require("./baralho/rotaBaralho");
const FlashCard = require("./flashcard/rotaFlashcard");

  app.use('/Baralho', Baralho);
  app.use('/Flashcards', FlashCard);

  app.get('/', (req, res) => {
    res.send('API FlashCard com MongoDB');
});

  app.listen(port, () => {
    console.log(`Servidor rodando na porta:${port}`);
});


  mongoose.connection.once("open", () =>{
    console.log("conectando ao mongoDB");
});
  mongoose.connection?.on('error', (error) =>{
    console.error(`Error to connect - MongoDB: Error: ${error.message}`);
})
