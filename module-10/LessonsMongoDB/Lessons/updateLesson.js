const Lessons = require('./lessonSchema');

async function updateLesson(id, subject) {
    try {
        const updatedLesson = await Lessons.findByIdAndUpdate(id, { subject: subject }, { new: true });
        return updatedLesson;
    } catch (error) {
        throw new Error(`Error updating lesson: ${error.message}`);
    }
}

module.exports = updateLesson;
