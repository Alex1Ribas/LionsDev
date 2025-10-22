/////////////////////////////////////// Importações
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const port = dotenv.process?.PORT;

////////////////////////////////////// Configuração do dotenv
dotenv.config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

///////////////////////////////////// Conexão com o MongoDB
mongoose.connect(
    `mongodb+srv://${dbUser}_db_user:${dbPassword}@cluster0.dnupdb2.mongodb.net/Figurinhas?retryWrites=true&w=majority`)

////////////////////////////////////// Middlewares e Rotas
app.use(express.json());

const rotasFigurinhas = require('./routes/router');

app.use(rotasFigurinhas);
app.get('/', (req, res) => {
    res.send('API de Figurinhas');
});

////////////////////////////////////// Iniciar o Servidor
mongoose.connection.once('open', () => {
    console.log('Conectado ao MongoDB');
});
mongoose.connection?.on('error', (err) =>{
    console.error(`Error to connect - MongoDB: Error: ${error.message}`);
})
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);    
});