const Student = require("./schemaStudents");

const deleteStudent = async (id) => {
    try {
        return await Student.findByIdAndDelete(id);
    } catch (error) {
        console.error("Error, student not deleted!", error.message);
        throw error;      
    }
};

module.exports = deleteStudent;
