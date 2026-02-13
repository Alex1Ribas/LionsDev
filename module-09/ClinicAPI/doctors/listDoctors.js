const { doctors } = require("../data/data");

function listDoctors(req, res) {
    if (doctors.length <= 0) {
        return res.status(404).send({ message: "No doctors found." });
    }
    res.status(200).send(doctors);
}

module.exports = listDoctors;
