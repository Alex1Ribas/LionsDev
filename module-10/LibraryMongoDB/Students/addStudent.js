const Student = require("./schemaStudents");

const addStudent = async (name, course, year, registration) => {
  try {
    const newStudent = await Student.create({
      name,
      course,
      year,
      registration,
    });
    return newStudent;
  } catch (error) {
    console.error("Error creating a student:", error.message);
    throw error;
  }
};

module.exports = addStudent;
