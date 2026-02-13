const { patients } = require("../data/data");

function updatePatients(req, res) {
    const { id } = req.params;
    const idInt = parseInt(id);
    const { name, birthDate } = req.body;

    if (!name || !birthDate) {
        return res.status(400).send({ message: 'All fields (name, birthDate) are required.' });
    }

    const index = patients.findIndex(patient => patient.id === idInt);

    if (index === -1) {
        return res.status(404).send({ message: 'Patient not found.' });
    }

    patients[index] = {
        ...patients[index],
        name,
        birthDate,
    };

    return res.status(200).send({
        message: 'Patient updated successfully.',
        patient: patients[index],
    });
}

module.exports = updatePatients;
