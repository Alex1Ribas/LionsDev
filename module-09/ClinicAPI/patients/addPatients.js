const { patients, id } = require("../data/data");

function addPatients(req, res) {
    id.value++;
    
    const newPatient = {
        id: id.value,
        name: req.body.name,
        birthDate: birthDate
    };

    patients.push(newPatient);

    res.status(201).send({
        message: "New patient added successfully!",
        patient: newPatient
    });
}

module.exports = { addPatients };
