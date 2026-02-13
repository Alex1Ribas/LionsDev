const { students } = require("../data/data");

function listStudents(req, res) {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }

  const studentData = students.map(student => ({
    registrationNumber: student.registrationNumber,
    name: student.name,
    major: student.major,
    year: student.year
  }));

  res.status(200).send(studentData);
}

module.exports = listStudents