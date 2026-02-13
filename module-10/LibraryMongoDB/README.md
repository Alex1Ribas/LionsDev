# Library Management & Rental API

## Description

This project is a **REST API** designed to manage a library's ecosystem. It handles the registration of books and students while managing the business logic for book rentals and returns. The system ensures data integrity by connecting MongoDB for persistent storage and implementing logic to track rental statuses.

All interactions are performed via **HTTP requests** (GET, POST, PUT, DELETE), making it compatible with tools like Postman, Insomnia, or frontend integrations.

## Project Structure

```
LibraryAPI/
│
├── Rentals/
│   ├── addRental.js       
│   ├── addReturn.js
│   ├── deleteRentals.js
│   ├── listRentals.js
│   ├── updateRentals.js
│   ├── schemaRentals.js
│   └── searchRentals.js
│    
├── Students
│   ├── addStudent.js       
│   ├── listStudents.js
│   ├── updateStudent.js
│   ├── deleteStudent.js
│   ├── schemaStudents.js
│   └── searchStudents.js
│
├── Books
│   ├── addBooks.js       
│   ├── listBooks.js
│   ├── updateBooks.js
│   ├── deleteBooks.js
│   ├── schemaBooks.js
│   └── searchBooks.js
│
├── Routes
│   ├── booksRoutes.js       
│   ├── rentalsRoutes.js
│   └── studentsRoutes.js
│
└── index.js (Main Entry Point)
```

## Core Files

### `data/data.js`

* **Legacy Storage:** Originally used for in-memory arrays. In the current version, it can serve as a backup or for temporary state control.

### `index.js`

* **Entry Point:** The heart of the application.
* **Configuration:** Initializes **Express**, connects to **MongoDB** using Mongoose, and sets up environmental variables via `dotenv`.
* **Routing:** Mounts specialized route modules to their respective paths: `/books`, `/students`, and `/rentals`.

## Functional Modules

### `rotas/` (Routing Layer)

Acts as the traffic controller. It maps HTTP methods and endpoints to the logic stored in the controller folders.

* **`booksRoutes.js`**: Routes for inventory management.
* **`studentsRoutes.js`**: Routes for student records.
* **`rentalsRoutes.js`**: Handles the transaction logic (Rent/Return).

### `Books/`, `Students/` & `Rentals/` (Controllers & Schemas)

* **Schemas:** Use **Mongoose** to define the data structure (Title, Author, Registration, Dates, etc.) and ensure database-level validation.
* **Logic:** Contains asynchronous functions to perform CRUD operations.
* **Integrity:** Includes checks such as preventing the deletion of a rental if the book hasn't been returned yet.

---

## Business Rules

* **Dependencies:** A rental record cannot be deleted if the `returnDate` is empty, ensuring that books are accounted for.
* **Validation:** Return dates must be chronologically after the rental date.
* **Search:** Implements MongoDB `$regex` for case-insensitive and partial searches, allowing flexible queries for titles or names.

## Tech Stack

* **Node.js:** Runtime environment.
* **Express.js:** Web framework for routing.
* **MongoDB & Mongoose:** Database and ODM for data persistence.
* **JavaScript (ES6+):** Core programming language.

## How to Run

1. **Install Dependencies:**

```bash
npm install express mongoose dotenv
```

2. **Configure Environment:**
Create a `.env` file and add your connection string:

```env
DB_URI=mongodb+srv://your_user:password@cluster.mongodb.net/library
PORT=3000
```

3. **Start the Server:**

```bash
node index.js
```

4. **Access the API:**

* `GET /books` - List all books.
* `POST /rentals` - Register a new rental.
* `POST /rentals/return/:id` - Process a book return.

## Learning Notes

* **Modularization:** Logic is split into Controllers, Schemas, and Routes for high maintainability.
* **Persistence:** Transitioned from in-memory arrays to a real database (MongoDB).
* **REST Standards:** Uses correct HTTP status codes (`201 Created`, `404 Not Found`, `400 Bad Request`).