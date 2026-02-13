const Lessons = require('./lessonSchema');

async function removeLesson(id) {
    try {
        const removed = await Lessons.findByIdAndDelete(id);
        return removed;
    } catch (error) {
        throw new Error(`Error deleting lesson: ${error.message}`);
    }
}

module.exports = removeLesson;
