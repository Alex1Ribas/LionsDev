const { appointments } = require("../data/data");

function searchByAppointment(req, res) {
  const { date, doctorId, patientId, description } = req.query;

  const results = appointments.filter(c => {
    const dateFound = date ? c.date === date : true;
    const doctorFound = doctorId ? c.doctorId == doctorId : true;
    const patientFound = patientId ? c.patientId == patientId : true;
    const descriptionFound = description ? c.description.toLowerCase().includes(description.toLowerCase()) : true;

    return dateFound && doctorFound && patientFound && descriptionFound;
  });

  if (results.length === 0) {
    return res.status(404).send("No appointments found!");
  }

  res.status(200).send(results);
}

module.exports = searchByAppointment;
