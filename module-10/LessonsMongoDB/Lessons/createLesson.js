const Lessons = require('./lessonSchema');

async function createLesson(teacherId, date, subject) {
    try {
        const savedLesson = await Lessons.create({
            teacherId,
            date,
            subject
        });
        return savedLesson;
    } catch (error) {
        throw new Error(`Error creating lesson: ${error.message}`);
    }
}

module.exports = createLesson;
