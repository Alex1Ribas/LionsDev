const { patients, appointments } = require("../data/data");

function patientReport(req, res) {
    const { id } = req.params;
    const idInt = parseInt(id);

    const patientFound = patients.find(patient => patient.id === idInt);
    if (!patientFound) {
        return res.status(404).send({ message: "Patient ID not found!" });
    }

    const patientAppointments = appointments.filter(app => app.patientId === idInt);
    
    const report = {
        patient: patientFound,
        appointments: patientAppointments
    };

    return res.status(200).send(report);
}

module.exports = patientReport;
