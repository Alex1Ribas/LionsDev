# User Management & Auth Ecosystem

## Description

This project is a high-level **REST API** designed for secure user management. It implements a strictly decoupled architecture using the **Repository-Service-Controller** pattern. This ensures that business logic, data persistence, and HTTP handling are isolated, making the system highly maintainable, testable, and scalable.

The API features a complete authentication flow with **JWT (JSON Web Tokens)** and a granular authorization system based on **RBAC (Role-Based Access Control)**.

## Project Structure

```
UserAPI/
│
├── src/
│   ├── config/
│   │   └── db.js             
│   ├── controllers/
│   │   └── user.controller.js 
│   ├── middlewares/
│   │   ├── authMiddleware.js  
│   │   ├── error.middleware.js 
│   │   └── validate.middleware.js 
│   ├── models/
│   │   └── user.model.js      
│   ├── repositories/
│   │   └── user.repository.js  
│   ├── services/
│   │   └── user.service.js    
│   ├── utils/
│   │   ├── createError.js     
│   │   ├── jwtHelper.js       
│   │   └── passwordHasher.js   
│   └── routes/
│       └── user.routes.js     
│
├── app.js                      
└── server.js                   
```

## Core Architectural Layers

### `repositories/` (Data Access)

The "Hands" of the application. It contains direct Mongoose queries. By isolating this layer, the rest of the application doesn't need to know which database is being used.

### `services/` (Business Logic)

The "Brain". This layer handles all validations (e.g., checking for duplicate emails), password encryption, and specific business rules before data reaches the repository.

### `controllers/` (API Interface)

The "Interface". It manages the communication with the client, receiving requests and returning standardized JSON responses and HTTP status codes.

### `middlewares/` (Security & Flow)

* **Auth & RBAC:** Protects routes and ensures that only users with specific roles (like `ADMIN`) can perform sensitive actions.
* **Error Handler:** A centralized module that intercepts any error in the application and returns a clean, formatted response to the client.

## Business Rules

* **Secure Hashing:** All passwords are salted and hashed using **Bcrypt** before storage.
* **Payload Integrity:** Mandatory fields like `name`, `email`, and `password` are validated at the Service level.
* **Access Control:** Endpoints like `GET /users` (list) and `DELETE /users/:id` are restricted to `ADMIN` roles.
* **Sanitized Data:** Sensitive information like passwords is excluded from response bodies using Mongoose's `select: false` or specific projections.

## Tech Stack

* **Node.js (ES Modules):** Modern JavaScript runtime.
* **Express.js:** Web framework for routing and middleware.
* **MongoDB & Mongoose:** NoSQL database and ODM.
* **JSON Web Token (JWT):** Secure session management.
* **BcryptJS:** Industry-standard password security.

## How to Run

1. **Install Dependencies:**

```bash
npm install
```

2. **Configure Environment:**
Create a `.env` file with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_security_secret
JWT_EXPIRATION=7d
BCRYPT_SALT_ROUNDS=10
PORT=3000
```

3. **Start the Server:**

```bash
node server.js
```

## Learning Notes

* **Separation of Concerns:** Demonstrates how to prevent "Fat Controllers" by moving logic to Services.
* **Clean Code:** Usage of utility functions for error creation and token handling to keep the codebase DRY (*Don't Repeat Yourself*).
* **Robust Error Handling:** Global middleware ensures the server never crashes on expected errors and always provides feedback.
