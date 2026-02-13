# Medical Clinic API

## Description

This project is a **RESTful API** designed to streamline medical clinic operations. It manages the registration of doctors and patients while facilitating the scheduling of appointments. The system features a robust **Reporting** and **Search** engine that allows for deep data retrieval, such as identifying all doctors who treated a specific patient or filtering appointments by month.

## Project Structure

```
ClinicAPI/
│
├── Search/
│   ├── searchRoutes.js
│   ├── searchByDoctor.js
│   ├── searchByAppointment.js
│   └── searchByPatient.js
│
├── patients/
│   ├── listPatients.js
│   ├── updatePatients.js
│   ├── patientRoutes.js
│   ├── addPatients.js
│   └── deletePatient.js
│
├── appointments/
│   ├── deleteAppointments.js
│   ├── updateAppointments.js
│   ├── addAppointment.js
│   ├── appointmentRoutes.js
│   └── listAppointments.js
│
├── doctors/
│   ├── listDoctors.js
│   ├── addDoctors.js
│   ├── doctorRoutes.js
│   ├── updateDoctors.js
│   └── deleteDoctors.js
│
├── reports/
│   ├── appointmentReport.js
│   ├── appointmentReportByMonth.js
│   ├── patientReport.js
│   ├── doctorReportByPatient.js
│   ├── reportRoutes.js
│   └── doctorReport.js
│
├── data/
│   └── data.js
│
└── index.js

```

---

## Core Files

### `data/data.js`

* **In-Memory Database:** Uses arrays (`doctors`, `patients`, `appointments`) to simulate a database.
* **ID Management:** Centralizes a global `id` counter to ensure every record has a unique primary key across the system.

### `index.js`

* **The Brain:** Initializes Express and connects the modularized routes.
* **Global Middleware:** Configures the server to parse JSON payloads for all incoming requests.

---

## Functional Modules

### Doctors & Patients (CRUD)

* Full management of medical staff (name, specialty) and patients (name, birth date).
* Implements standard HTTP methods: `GET`, `POST`, `PUT`, `DELETE`.

### Appointments

* Acts as the bridge between doctors and patients.
* Stores `doctorId`, `patientId`, `date`, and a medical `description`.

### Search System

* **Dynamic Filtering:** Allows users to find records via query parameters (e.g., `?name=Smith`).
* **Case-Insensitivity:** All string-based searches are normalized to lowercase for better user experience.

### Reporting Engine

* **Relational Insights:** Generates specialized views, such as:
* All appointments for a specific doctor.
* A history of doctors seen by a single patient.
* Monthly statistical views of clinic activity.


## Business Rules

* **Required Data:** Appointments cannot be created without a valid `doctorId`, `patientId`, and `date`.
* **State Integrity:** Deletions and updates are handled by finding unique IDs to prevent accidental data loss.
* **Month-Based Filtering:** The system expects a `YYYY-MM` format for monthly reports.


## Tech Stack

* **Node.js**
* **Express.js** (Routing and Middleware)
* **JavaScript (ES6+)**

## How to Run

1. **Clone/Navigate** to the project directory.
2. **Install dependencies**:
```bash
npm install express

```


3. **Start the server**:
```bash
node index.js

```


4. **Test the API**:
Use Postman or Insomnia to hit `http://localhost:3000/`.

---

## Learning Notes

* **Module Separation:** Demonstrates the "Controller-Route" pattern for clean code.
* **Data Mapping:** Showcases how to use `.filter()`, `.find()`, and `.map()` to simulate SQL-like joins in JavaScript.
* **Scalability:** The architecture allows for easy addition of new features, such as "Insurance" or "Billing" modules.
