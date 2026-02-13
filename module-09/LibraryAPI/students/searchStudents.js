const { students } = require("../data/data");

function searchStudents(req, res) {
    const { name, major, registrationNumber } = req.query;

    if (!name && !major && !registrationNumber) {
        return res.status(400).send('Provide at least one search parameter.');
    }

    const results = students.filter(student => {
        return (
            (!name || (student.name && student.name.toLowerCase().includes(name.toLowerCase()))) &&
            (!major || (student.major && student.major.toLowerCase().includes(major.toLowerCase()))) &&
            (!registrationNumber || (student.registrationNumber && student.registrationNumber.toString().includes(registrationNumber))) //toString() to be able to use includes()
            //parameter is true || condition; if false, the && continues to check the other parameters
        );
    });

    if (results.length === 0) {
        return res.status(404).send('No students found!');
    }

    return res.status(200).send(results);
}

module.exports = searchStudents;