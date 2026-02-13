const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Importing translated route modules
const doctorRoutes = require('./doctors/doctorRoutes');
const patientRoutes = require('./patients/patientRoutes');
const appointmentRoutes = require('./appointments/appointmentRoutes');
const reportRoutes = require('./reports/reportRoutes');
const searchRoutes = require('./Search/searchRoutes');

// Defining English endpoints
app.use('/doctors', doctorRoutes);
app.use('/patients', patientRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/reports', reportRoutes);
app.use('/search', searchRoutes);

app.get('/', (req, res) => {
  res.send('Medical Clinic API');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
