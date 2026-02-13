const { patients } = require("../data/data");

function listPatients(req, res) {
    if (patients.length <= 0) {
        return res.status(404).send({ message: "No patients found." });
    }
    res.status(200).send(patients);
}

module.exports = listPatients;
