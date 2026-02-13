const { doctors, appointments } = require("../data/data");

function doctorReportByPatient(req, res) {
  const { patientId } = req.params;
  const idInt = parseInt(patientId);

  const patientAppointments = appointments.filter(app => app.patientId === idInt);
  if (patientAppointments.length === 0) {
    return res.status(404).send({ message: "No appointments found for this patient!" });
  }

  const doctorIds = [...new Set(patientAppointments.map(app => app.doctorId))];
  const doctorsWhoTreated = doctors.filter(doc => doctorIds.includes(doc.id));

  res.status(200).send({
    patientId: idInt,
    doctors: doctorsWhoTreated
  });
}

module.exports = doctorReportByPatient;
