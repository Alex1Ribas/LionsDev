const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    lessonId: {
        type: String,
        required: true
    },
    attendance: {
        type: [Object],
        required: true,
        studentId: {
            type: Number,
            required: true
        },
        present: {
            type: Boolean,
            required: true
        }
    }
});

module.exports = mongoose.model('Attendances', AttendanceSchema);
