const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://alexribas12_db_user:c9nGDDjqPk6EuL7R@cluster0.dnupdb2.mongodb.net/")

const app = express();
const port = 3000;

app.use(express.json());

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
  mongoose.connection?.on('error', (err) =>{
    console.error(`Error to connect - MongoDB: Error: ${error.message}`);
})
