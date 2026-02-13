const { students, rentals } = require("../data/data");


function deleteStudent(req, res){
    const { registrationNumber } = req.params;
    const index = students.findIndex((student) => student.registrationNumber == parseInt(registrationNumber));

    if (index === -1) {
        return res.status(404).send({ message: "Student not found!"});
    }

    if(rentals.includes(students[index])){
        return res.status(400).send({message: "Student has active rentals, removal is not allowed"})
    };

    const deleted = students.splice(index, 1)[0];
    res
    .status(200)
    .send({ message: "Student removed successfully!", student: deleted});
};

module.exports = deleteStudent;