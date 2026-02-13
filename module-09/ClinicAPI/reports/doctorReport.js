const { doctors, appointments } = require("../data/data");

function doctorReport(req, res) {
    const { id } = req.params;
    const idInt = parseInt(id);

    const doctorFound = doctors.find(doctor => doctor.id === idInt);
    if (!doctorFound) {
        return res.status(404).send({ message: "Doctor ID not found!" });
    }

    const doctorAppointments = appointments.filter(app => app.doctorId === idInt);
    
    const report = {
        doctor: doctorFound,
        appointments: doctorAppointments
    };

    return res.status(200).send(report);
}

module.exports = doctorReport;
