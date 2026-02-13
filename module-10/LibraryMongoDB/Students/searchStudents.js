const { students: studentsData } = require("../data/data");

function searchStudents(req, res) {
  const { name, course, registration } = req.query;

  if (!name && !course && !registration) {
    return res.status(400).send("Provide at least one search parameter.");
  }

  const results = studentsData.filter((student) => {
    return (
      (!name ||
        (student.name &&
          student.name.toLowerCase().includes(name.toLowerCase()))) &&
      (!course ||
        (student.course &&
          student.course.toLowerCase().includes(course.toLowerCase()))) &&
      (!registration ||
        (student.registration &&
          student.registration.toString().includes(registration)))
    );
  });

  if (results.length === 0) {
    return res.status(404).send("No students found!");
  }

  return res.status(200).send(results);
}

module.exports = searchStudents;
