const { appointments } = require("../data/data");

function deleteAppointments(req, res) {
    const { id } = req.params;
    const idInt = parseInt(id);

    const index = appointments.findIndex(appointment => appointment.id === idInt);

    if (index === -1) {
        return res.status(404).send({ message: "Appointment not found!" });
    }

    const removedAppointment = appointments.splice(index, 1)[0];

    return res.status(200).send({
        message: "Appointment removed successfully.",
        appointment: removedAppointment
    });
}

module.exports = deleteAppointments;
