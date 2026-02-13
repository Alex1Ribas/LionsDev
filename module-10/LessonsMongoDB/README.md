# Lessons & Attendance API

## Description

This project is a **RESTful API** built to manage academic classroom activities and student attendance records. Using **MongoDB** and **Mongoose**, it allows educational institutions to log lesson subjects, assign them to specific teachers, and perform digital "roll calls" (attendance tracking). The project follows the **Domain-Driven Modular Pattern**, keeping all lesson-related schemas and logic encapsulated for maximum scalability.

## Project Structure

```text
LessonsAPI/
│
├── Lessons/
│   ├── lessonRoutes.js      # Module entry point and routing
│   ├── lessonSchema.js      # Lesson data model (MongoDB)
│   ├── attendanceSchema.js  # Attendance data model (MongoDB)
│   ├── createLesson.js      # Logic: Create new lesson
│   ├── listLessons.js       # Logic: Search lessons by teacher
│   ├── updateLesson.js      # Logic: Update lesson subject
│   ├── removeLesson.js      # Logic: Delete lesson records
│   └── recordAttendance.js  # Logic: Register student attendance
│
├── .env                     # Environment variables (Credentials)
└── index.js                 # Global entry point and DB connection

```

---

## Core Files

### `lessonSchema.js` & `attendanceSchema.js`

* **MongoDB Models:** Defines the structure for classroom data (subject, teacher, date) and attendance logs (student list, presence status).
* **Validation:** Uses Mongoose strict typing to ensure that every lesson has a valid date and every attendance record is linked to a specific lesson.

### `index.js`

* **The Orchestrator:** Manages the cloud database connection via **MongoDB Atlas**.
* **Environment Safety:** Utilizes `dotenv` to protect sensitive database credentials (`DB_USER`, `DB_PASSWORD`).

---

## Functional Modules

### Lesson Management

* **Creation:** Teachers can create a new lesson entry with a specific subject and date.
* **Filtering:** Retrieve all lessons assigned to a specific teacher ID.
* **Maintenance:** Update lesson subjects or remove outdated entries from the database.

### Attendance System (Roll Call)

* **Digital Presence:** Allows the registration of a student list for a specific lesson, marking each student as "Present" or "Absent".
* **Reliability:** Each attendance log is tied to a `lessonId`, creating a clear audit trail for academic records.

## Business Rules

* **Teacher Identification:** The `teacherId` is mandatory for listing and creating lessons.
* **Database Connectivity:** All operations are asynchronous and require a successful connection to the MongoDB cluster.
* **Attendance Integrity:** Attendance records are stored as an array of objects, containing both `studentId` and a boolean `present` status.

## Tech Stack

* **Node.js**
* **Express.js** (API Framework)
* **Mongoose** (ODM for MongoDB)
* **Dotenv** (Security)

## How to Run

1. **Configure Environment**:
Create a `.env` file in the root directory with:
```env
DB_USER=your_username
DB_PASSWORD=your_password
```

2. **Install dependencies**:
```bash
npm install express mongoose dotenv
```

3. **Start the server**:
```bash
node index.js
```

## Learning Notes

* **Encapsulated Schemas:** By placing Mongoose models inside the module folder, we treat the "Lesson" domain as a self-contained micro-service.
* **Database Persistence:** Unlike the previous in-memory projects, this API demonstrates real-world data persistence using a cloud-based NoSQL database.
* **Error Handling:** Implements `try/catch` blocks across all controllers to provide clear error messages in case of database failures.
