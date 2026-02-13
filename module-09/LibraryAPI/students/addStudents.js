const { id, students, registration } = require("../data/data");

function addStudent(req, res){
        
    const newStudent = {
        id: id.value,
        registrationNumber: registration.value,
        name: req.body.name,
        major: req.body.major,
        year: parseInt(req.body.year)
    };
                                                    
    
    const student = students.find((e) => e.registrationNumber === newStudent.registrationNumber);

    if(student){
        return res.status(400).send({message: "A user with this registration number already exists"})
    };

    students.push(newStudent);
    id.value++; 
    registration.value++;
    
    res.status(201).send({ message: "Added successfully!", student: newStudent });
}

module.exports = addStudent;