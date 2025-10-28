const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.dnupdb2.mongodb.net/Usuario?retryWrites=true&w=majority`)
    
const app = express();
const port = 3000;

app.use(express.json());

const rotas = require('./routes/rotas');

app.use(rotas);

app.get('/', (req, res) => {
    res.send('API Login');
});


mongoose.connection.once('open', () => {
    console.log('Conectado ao MongoDB');
});
mongoose.connection?.on('error', (err) =>{
    console.error(`Error to connect - MongoDB: Error: ${error.message}`);
})
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});