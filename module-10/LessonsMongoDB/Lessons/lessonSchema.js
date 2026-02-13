const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
    teacherId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Lessons', LessonSchema);
