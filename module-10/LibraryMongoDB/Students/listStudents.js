const Student = require("./schemaStudents");

const listStudents = async () => {
  try {
    return await Student.find();
  } catch(error) {
    console.error("Error finding students");
    throw error;
  }
};

module.exports = listStudents;
