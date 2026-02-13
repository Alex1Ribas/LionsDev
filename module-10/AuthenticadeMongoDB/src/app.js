const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const db_url = process.env.DB_URL;

mongoose.connect(db_url);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const authRoutes = require('./routes/authRoutes');

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Authentication API');
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection?.on('error', (error) => {
    console.error(`MongoDB connection error: ${error.message}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
