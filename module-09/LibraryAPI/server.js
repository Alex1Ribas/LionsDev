const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const bookRoutes = require('./rotas/bookRoutes');
const studentRoutes = require('./rotas/studentRoutes');
const rentalRoutes = require('./rotas/rentalRoutes');

app.use('/books', bookRoutes);
app.use('/students', studentRoutes);
app.use('/rentals', rentalRoutes);

app.get('/', (req, res) => {
  res.send('Library Rental API');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});