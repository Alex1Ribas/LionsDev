const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    registration: {
        type: Number,
        required: true
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
