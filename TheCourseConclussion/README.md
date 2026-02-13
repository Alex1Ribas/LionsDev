# TCC – Personal Finance Management System (Fullstack)

## Description
This project is a **full-featured personal finance management system**, implementing best practices in backend development with **Express.js and MongoDB**, along with a **frontend interface built with FlutterFlow**.  

It serves as a culmination of all previous modules, combining:

- Database-driven CRUD operations
- MVC architecture
- Authentication and role-based access control
- Asynchronous operations with error handling
- Testing with Jest
- Modular and maintainable code

The system allows users to manage **expenses (despesas)**, **income (receitas)**, and generate **financial reports (relatórios)**.

---

## Features

### Backend
- **Express.js API**
- **MongoDB with Mongoose** schemas
- **MVC pattern**:
  - Models: Define the database structure (`User`, `Receita`, `Despesa`)
  - Controllers: Handle API requests
  - Services: Implement business logic
  - Repositories: Encapsulate database interactions
- **Authentication and Security**:
  - JWT-based login
  - Password hashing with bcrypt
  - Middleware for role-based route protection
- **Validation and Error Handling**:
  - Input validation via `validate.middleware.js`
  - Centralized error handling with `error.middleware.js`
  - Consistent HTTP status codes
- **Testing**:
  - Full test coverage using Jest for repositories, services, and controllers
  - Integration tests for API endpoints

### Frontend
- Built with **FlutterFlow**
- Responsive UI for managing users, income, expenses, and reports
- Interacts with the backend via REST API calls
- Implements authentication and protected routes

---

## Project Structure

```
TCC/
├── server.js
├── app.js
├── package.json
└── src/
    ├── config/           # Database configuration
    ├── models/           # Mongoose schemas
    ├── repositories/     # Database operations
    ├── controllers/      # API request handlers
    ├── services/         # Business logic
    ├── middlewares/      # Authentication, validation, error handling
    ├── routes/           # API endpoints
    └── utils/            # Helpers (hashing, token generation, error creation)
```

---

## Key Concepts Applied

* RESTful API design
* Async/await and Promises for database operations
* JWT authentication and role-based access control
* Modular, maintainable code organization
* Input validation and error handling
* Full testing with Jest

---

## How to Run

### Backend

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file with required environment variables (e.g., MongoDB URI, JWT secret).
4. Start the server:

   ```bash
   node server.js
   ```
5. Test endpoints via **Postman** or **Insomnia**, or integrate with FlutterFlow frontend.

### Frontend

* Open the FlutterFlow project.
* Configure API endpoints to point to the backend server.
* Run the FlutterFlow app to interact with the system.

---

## Testing

* All backend modules are tested with **Jest**:

  * Repository unit tests
  * Service unit tests
  * Controller integration tests
* Run tests:

  ```bash
  npm test
  ```

---

## Learning Outcomes

* Full-stack development experience integrating backend and frontend
* Strong understanding of **API design, authentication, and security**
* Mastery of **MVC pattern** and modular architecture
* Proficiency in **database operations with MongoDB**
* Experience in **unit and integration testing** with Jest
* Ability to deliver a **production-ready, scalable system**

---

## Notes

This project represents the **culmination of the learning path**, applying **all previous knowledge** from CLI systems, modularization, Express, MongoDB, JWT authentication, and testing.
It is a **ready-to-deploy fullstack solution** demonstrating professional backend and frontend skills.
