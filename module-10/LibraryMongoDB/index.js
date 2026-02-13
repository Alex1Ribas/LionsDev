const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const db_uri = process.env.DB_URI;

const app = express();
app.use(express.json());

mongoose.connect(db_uri)
  .then(() => {
    console.log("Connected to MongoDB");

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

const booksRoutes = require('./rotas/booksRoutes');
const studentsRoutes = require('./rotas/studentsRoutes');
const rentalsRoutes = require('./rotas/rentalsRoutes');

app.use('/books', booksRoutes);
app.use('/students', studentsRoutes);
app.use('/rentals', rentalsRoutes);

app.get('/', (req, res) => {
  res.send('Mongo DB Library API');
});

mongoose.connection?.on("error", (error) => {
  console.error(`MongoDB connection error: ${error.message}`);
});
