const Student = require("./schemaStudents");

const updateStudent = async (id, name, course, year, registration) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            { name, course, year, registration },
            { new: true, runValidators: true }
        );
        return updatedStudent;
    } catch (error) {
        console.error("Error updating student", error.message);
        throw error;
    }
};

module.exports = updateStudent;
