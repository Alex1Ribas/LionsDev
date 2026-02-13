const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// Database Connection
mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.dnupdb2.mongodb.net/Stickers?retryWrites=true&w=majority`
);

// Middlewares
app.use(express.json());

// Routes Import
const stickerRoutes = require('./routes/stickerRoutes');

// Routes Middleware
app.use('/stickers', stickerRoutes);

app.get('/', (req, res) => {
    res.send('Stickers Collection API');
});

// Connection Listeners
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection?.on('error', (error) => {
    console.error(`MongoDB connection error: ${error.message}`);
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);    
});
