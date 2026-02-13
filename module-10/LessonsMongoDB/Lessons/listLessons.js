const Lessons = require('./lessonSchema');

async function listLessons(teacherId) {
    try {
        if (!teacherId) {
            throw new Error('Teacher ID is required.');
        }
        const lessonsFound = await Lessons.find({ teacherId: teacherId });
        return lessonsFound;
    } catch (error) {
        throw new Error(`Error listing lessons: ${error.message}`);
    }
}

module.exports = listLessons;
