# Module 10 – Full Backend Systems with MongoDB, MVC, and Authentication

## Description
This module consolidates all previous learning into **full backend systems** using **MongoDB** for persistence. The focus is on transforming in-memory arrays into database-driven applications while implementing **modern backend practices**:

- MVC architecture
- JWT-based authentication
- Password hashing with bcrypt
- Role-based access control
- Protected routes
- Async functions with try/catch
- CRUD operations using Mongoose schemas

Projects range from **scheduling systems** and **stock management** to **FlashCards**, **book rentals**, and **user authentication**.

---

## Core Concepts Applied

### MongoDB Integration
- Replaced arrays with persistent storage using MongoDB
- Defined **Mongoose schemas** for each entity
- Implemented CRUD operations for multiple collections
- Ensured relational integrity where needed (e.g., FlashCards ↔ Decks)

### MVC Architecture
- **Models:** Represent data structures and schemas
- **Views:** CLI or JSON responses for API endpoints
- **Controllers:** Handle business logic and route operations
- Separation of concerns for maintainable code

### Authentication & Authorization
- JWT for stateless authentication
- Password hashing using bcrypt
- Role-based route protection
- Login endpoints with validation
- Protected routes that require token verification

### API and Routing
- REST-style endpoints with Express.js
- Handling `req` and `res` consistently
- Proper HTTP status codes for success and errors
- Route-level middleware for validation and authorization

### Asynchronous Operations
- Async/await functions for database operations
- Error handling using try/catch
- Promise-based flows where necessary
- Arrow functions for concise logic

### Additional Features
- Environment configuration using `.env`
- Input validation and error messages
- Modularized utility functions
- Project-specific business rules enforced in controllers

---

## Projects Included
- **projeto/** – Full system example with MVC
- **Agenda_Aulas/** – Scheduling application
- **stockSystem/** – Stock management system with login
- **Alugueis_MongoDB/** – Book rental management
- **authenticade/** – Authentication system with JWT and roles
- **FlashCard_MongoDB/** – FlashCards system migrated to MongoDB
- **Figurinhas/** – Sticker collection management

> Each project contains a self-contained implementation demonstrating MongoDB, MVC, authentication, and CRUD operations.

---

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- bcrypt
- dotenv
- Async/await and Promises
- REST APIs

---

## How to Run
1. Clone the repository.
2. Install dependencies in the project folder:
   ```bash
   npm install
```

3. Create a `.env` file with required environment variables (e.g., database URI, JWT secret).
4. Run the server:

   ```bash
   node server.js
   ```
5. Use **Postman**, **Insomnia**, or any API client to interact with endpoints.

---

## Learning Outcomes

* Full understanding of **backend system design** and **persistence**
* Mastery of **Express.js routing and middleware**
* Practical knowledge of **JWT authentication** and **role-based access control**
* Experience applying **MVC architecture** to real projects
* Confident in **async database operations and error handling**
* Ready to transition from learning to professional backend development

---

## Notes

This module is the culmination of the entire course. All previous knowledge—**logic, arrays, modularization, validation, and CLI systems**—is now applied in **database-backed, production-ready API systems**.
```
