const { appointments } = require("../data/data");

function appointmentReportByMonth(req, res) {
  const { month } = req.params; // Example: '2024-08'

  const monthAppointments = appointments.filter(app => app.date.startsWith(month));

  if (monthAppointments.length === 0) {
    return res.status(404).send({ message: `No appointments found for the month ${month}` });
  }

  res.status(200).send({
    month,
    appointments: monthAppointments
  });
}

module.exports = appointmentReportByMonth;
