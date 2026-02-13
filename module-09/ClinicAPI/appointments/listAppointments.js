const { appointments } = require("../data/data");

function listAppointments(req, res) {
    if (appointments.length <= 0) {
        return res.status(404).send({ message: "No appointments found." });
    }
    res.status(200).send(appointments);
}

module.exports = listAppointments;
