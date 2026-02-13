const { appointments, id } = require("../data/data");

function addAppointment(req, res) {
    const { doctorId, patientId, date, description } = req.body;

    if (!doctorId || !patientId || !date) {
        return res.status(400).send({ message: "doctorId, patientId, and date are required." });
    }

    id.value++;

    const newAppointment = {
        id: id.value,
        date: date,
        doctorId: doctorId,
        patientId: patientId,
        description: description
    };

    appointments.push(newAppointment);

    res.status(201).send({ 
        message: "Appointment created successfully!",
        appointment: newAppointment
    });
}

module.exports = { addAppointment };
