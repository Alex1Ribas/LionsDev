const { doctors } = require("../data/data");

function deleteDoctors(req, res) {
    const { id } = req.params;
    const idInt = parseInt(id);

    const index = doctors.findIndex(doctor => doctor.id === idInt);

    if (index === -1) {
        return res.status(404).send({ message: "ID not found!" });
    }

    doctors.splice(index, 1);
    return res.status(200).send({ message: "Doctor removed successfully." });
}

module.exports = deleteDoctors;
