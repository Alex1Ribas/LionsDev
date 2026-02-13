const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(
    `mongodb+srv://${dbUser}_db_user:${dbPassword}@cluster0.dnupdb2.mongodb.net/Lessons?retryWrites=true&w=majority`
);

const lessonRoutes = require('./Lessons/lessonRoutes');
app.use('/lessons', lessonRoutes);

app.get('/', (req, res) => {
    res.send('Lessons and Attendance API');
});

mongoose.connection.once('open', () => {
    console.log('Successfully connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
