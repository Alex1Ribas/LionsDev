const { appointments } = require("../data/data");

function updateAppointments(req, res) {
    const { id } = req.params;
    const idInt = parseInt(id);
    const { doctorId, patientId, date, description } = req.body;

    if (!doctorId || !patientId || !date) {
        return res.status(400).send({
            message: 'Fields (doctorId, patientId, date) are required.'
        });
    }

    const index = appointments.findIndex(appointment => appointment.id === idInt);

    if (index === -1) {
        return res.status(404).send({ message: 'Appointment not found.' });
    }

    appointments[index] = {
        ...appointments[index],
        doctorId,
        patientId,
        date,
        description
    };

    return res.status(200).send({
        message: 'Appointment updated successfully.',
        appointment: appointments[index],
    });
}

module.exports = updateAppointments;
