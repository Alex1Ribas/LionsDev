const { students } = require("../data/data");

function updateStudents(req, res){

    const { registrationNumber } = req.params;
    const newName = req.body.name;
    const newMajor = req.body.major;
    const newYear = req.body.year;


    const student = students.find((e) => e.registrationNumber == parseInt(registrationNumber));

    if(!student){
        return res.status(404).send({ message: "Student not found!" });
    }

   student.name = newName;
   student.major = newMajor;
   student.year = newYear;

    
    res.status(200).send({
        message: "Student was updated successfully!",
        student: student,
    });
};

module.exports = updateStudents;