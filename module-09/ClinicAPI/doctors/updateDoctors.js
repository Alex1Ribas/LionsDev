const { doctors } = require("../data/data");

function updateDoctors(req, res) {
    const { id } = req.params;
    const idInt = parseInt(id);
    const { name, specialty } = req.body;

    if (!name || !specialty) {
        return res.status(400).send({ message: 'All fields (name, specialty) are required.' });
    }

    const index = doctors.findIndex(doctor => doctor.id === idInt);

    if (index === -1) {
        return res.status(404).send({ message: 'Doctor not found.' });
    }

    doctors[index] = {
        ...doctors[index],
        name: name,
        specialty: specialty
    };

    return res.status(200).send({ message: 'Doctor updated successfully.', doctor: doctors[index] });
}

module.exports = updateDoctors;
