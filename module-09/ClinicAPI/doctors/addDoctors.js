const { id, doctors } = require("../data/data");

function addDoctors(req, res) {
    const { name, specialty } = req.body;

    if (!name || !specialty) {
        return res.status(400).send({ message: "Name and specialty are required." });
    }

    id.value++;

    const newDoctor = {
        id: id.value,
        name: name,
        specialty: specialty
    };

    doctors.push(newDoctor);

    res.status(201).send({
        message: "New doctor added successfully!",
        doctor: newDoctor
    });
}

module.exports = { addDoctors };
