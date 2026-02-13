const { appointments, patients, doctors } = require("../data/data");

function appointmentReport(req, res) {
    const { id } = req.params;
    const idInt = parseInt(id);

    const appointment = appointments.find(app => app.id === idInt);
    if (!appointment) {
        return res.status(404).send({ message: "Appointment ID not found!" });
    }

    const patient = patients.find(p => p.id === appointment.patientId);
    const doctor = doctors.find(d => d.id === appointment.doctorId);

    const report = {
        id: appointment.id,
        date: appointment.date,
        patient: patient || { message: "Patient not found" },
        doctor: doctor || { message: "Doctor not found" }
    };

    return res.status(200).send(report);
}

module.exports = appointmentReport;
