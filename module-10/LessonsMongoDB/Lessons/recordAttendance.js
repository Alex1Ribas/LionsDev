const Attendances = require('./attendanceSchema');

async function recordAttendance(lessonId, attendance) {
    try {
        const newAttendance = new Attendances({ lessonId, attendance });
        return await newAttendance.save();
    } catch (error) {
        throw new Error(`Error recording attendance: ${error.message}`);
    }
}

module.exports = recordAttendance;
