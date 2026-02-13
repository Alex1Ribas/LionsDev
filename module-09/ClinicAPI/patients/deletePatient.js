const { patients } = require("../data/data");

function deletePatient(req, res) {
    const { id } = req.params;
    const idInt = parseInt(id);

    const index = patients.findIndex(patient => patient.id === idInt);

    if (index === -1) {
        return res.status(404).send({ message: "ID not found!" });
    }

    patients.splice(index, 1);
    return res.status(200).send({ message: "Patient removed successfully." });
}

module.exports = deletePatient;
