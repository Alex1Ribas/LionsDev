# Library Management & Rental API

## Description

This project is a **REST API** designed to manage a library's ecosystem. It handles the registration of books and students, while managing the business logic for book rentals and returns. The system ensures data integrity by preventing the removal of records that have active dependencies (e.g., you cannot delete a book that is currently rented).

All interactions are performed via **HTTP requests** (GET, POST, PUT, DELETE), making it compatible with tools like Postman, Insomnia, or frontend integrations.

## Project Structure

```
LibraryAPI/
│
├── books/
│   ├── addBooks.js       
│   ├── listbooks.js
│   ├── updatebooks.js
│   ├── deleteBooks.js
│   └── searchBooks.js
│
├── data/
│   └──data.js   
│    
├── Rental/
│   ├── addRentals.js       
│   ├── addReturn.js
│   ├── deleteRentals.js
│   ├── listRentals.js
│   ├── updateRentals.js
│   └── searchrentals.js
│
├── Routes/
│   ├── bookRoutes.js       
│   ├── rentalRoutes.js
│   └── studentRoutes.js
│
├── studentes/
│   ├── addStudents.js       
│   ├── listStudents.js
│   ├── updateStudents.js
│   ├── deleteStudents.js
│   └── searchStudents.js
│
└── server.js      
```

## Core Files

### `data/data.js`

* **Storage:** Acts as the "source of truth" using in-memory arrays: `books`, `students`, and `rentals`.
* **State Control:** Manages auto-incrementing `id` and `registrationNumber` (starting at 100) to ensure unique identifiers for every entry.

### `server.js`

* **Entry Point:** The heart of the application.
* **Configuration:** Initializes the **Express** application and sets up `express.json()` middleware to handle incoming data.
* **Routing:** Mounts the specialized route modules (`bookRoutes`, `studentRoutes`, and `rentalRoutes`) to their respective URL paths (`/books`, `/students`, `/rentals`).
* **Bootstrap:** Starts the HTTP server on port 3000.

## Functional Modules

### `Routes/` (Routing Layer)

Acts as the traffic controller for the API. It maps specific HTTP methods (GET, POST, PUT, DELETE) and endpoints to the logic stored in the controller folders.

* **`bookRoutes.js`**: Routes for book management.
* **`studentRoutes.js`**: Routes for student records.
* **`rentalRoutes.js`**: Routes for the library's transaction logic.

### `books/` (Book Controller)

Contains the logic for the library's inventory.

* **Logic:** Handles creation, updates, and specialized searches (e.g., finding a book by genre or partial title).
* **Integrity:** Validates that a book exists before allowing updates or deletion.

### `studentes/` (Student Controller)

Manages the user base of the library.

* **Registration:** Assigns unique registration numbers and tracks student majors/years.
* **Validation:** Ensures that a student cannot be removed if they still have a book in their possession.

### `Rental/` (Rental & Return Controller)

The core business logic of the system.

* **Transactions:** Manages the link between a `student` and a `book`.
* **Return Logic:** Processes returns by identifying the correct rental ID and freeing up the book for the next user.
* **Relationship Management:** Uses the data from both the book and student arrays to ensure a valid transaction occurs.

---

## Business Rules

* **Dependencies:** A book cannot be deleted if it is part of an active rental. Likewise, a student cannot be deleted until all their books are returned.
* **Unique Identification:** Every student is tracked by a `registrationNumber` and every book/rental by a unique `id`.
* **Case-Insensitive Search:** All search modules use `.toLowerCase()` to ensure users find records regardless of how they type the query.

## Tech Stack

* **Node.js:** Runtime environment.
* **Express.js:** Web framework for routing and middleware.
* **JavaScript (ES6+):** Core programming language.


## How to Run

1. **Install Dependencies:**
```bash
npm install express
```

2. **Start the Server:**
```bash
node index.js
```

3. **Access the API:**
The server will run on `http://localhost:3000`.
* `GET /books` - List all books.
* `POST /students` - Register a new student.
* `GET /rentals/search?title=Hobbit` - Search for rentals by book title.


## Learning Notes

* **Modularization:** Demonstrates how to split logic into Controllers and Routes for better maintainability.
* **Relational Logic:** Simulates database relationships (Foreign Keys) within simple JavaScript arrays.
* **REST Standards:** Follows standard HTTP methods and status codes (`201 Created`, `404 Not Found`, `400 Bad Request`).
* **State Management:** Handles persistent-like state in a stateless environment using shared data modules.
```