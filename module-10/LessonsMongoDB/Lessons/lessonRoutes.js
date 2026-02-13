const express = require('express');
const router = express.Router();

const createLesson = require('./createLesson');
const listLessons = require('./listLessons');
const updateLesson = require('./updateLesson');
const removeLesson = require('./removeLesson');
const recordAttendance = require('./recordAttendance');

// POST: Create Lesson
router.post("/create", async (req, res) => {
    const { teacherId, date, subject } = req.body;
    const newLesson = await createLesson(teacherId, date, subject);
    res.status(201).send(newLesson);
});

// GET: List Lessons by Teacher
router.get("/list/:teacherId", async (req, res) => {
    const { teacherId } = req.params;
    const lessons = await listLessons(teacherId);
    res.status(200).send(lessons);
});

// PUT: Update Lesson
router.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { subject } = req.body;
    const updatedLesson = await updateLesson(id, subject);
    res.status(200).send(updatedLesson);
});

// DELETE: Remove Lesson
router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    await removeLesson(id);
    res.status(200).send({ message: "Lesson deleted successfully." });
});

// POST: Record Attendance (Roll Call)
router.post("/attendance/:lessonId", async (req, res) => {
    const { lessonId, attendance } = req.body;
    const newAttendance = await recordAttendance(lessonId, attendance);
    res.status(201).send({ message: "Attendance recorded successfully", attendance: newAttendance });
});

module.exports = router;
