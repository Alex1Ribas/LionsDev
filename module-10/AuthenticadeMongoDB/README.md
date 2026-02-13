# Auth & User Management API

## Description

This project is a robust **Authentication & Authorization API** designed to secure library or generic systems. It implements industry-standard security practices, such as **password hashing** with Bcrypt and **session control** via JSON Web Tokens (JWT). The system features a custom middleware capable of handling **Role-Based Access Control (RBAC)**, ensuring that only users with specific permissions (e.g., ADMIN) can access sensitive resources.

All interactions are performed via **HTTP requests**, and user state is persisted in **MongoDB**.

## Project Structure

```
AuthAPI/
│
├── controllers/
│   ├── Register.js       
│   ├── Login.js         
│   ├── profile.js        
│   └── authMiddleware.js 
│
├── data/
│   └── userSchema.js     
│
├── routes/
│   └── authRoutes.js     
│
└── app.js
```

## Core Security Components

### `data/userSchema.js`

* **Data Integrity:** Defines the structure for users, including `name`, `email` (unique/lowercase), and `password`.
* **RBAC Support:** Includes a `role` field (enum: `['USER', 'ADMIN']`) to define user permissions from the database level.

### `controllers/authMiddleware.js`

* **Interceptor:** Validates the `Authorization: Bearer <token>` header on protected requests.
* **Role Verification:** A higher-order function that checks if the user's role is included in the `allowedRoles` array before granting access to a route.

## Functional Modules

### Business Logic

* **`Register.js`**: Handles new user onboarding. It automatically hashes passwords before saving to the database and returns a signed JWT.
* **`Login.js`**: Authenticates credentials. It uses `bcrypt.compare` to verify passwords and generates a 7-day expiration token.
* **`profile.js`**: A secure controller that returns the current authenticated user's data by extracting the payload from `req.user`.

### Routing Layer

* **Public Routes:** `/register` and `/login` are accessible to everyone.
* **Private Routes:** `/profile` is protected by `authMiddleware`, requiring a valid token to be accessed.

## Business Rules

* **Secure Storage:** Passwords are never stored in plain text. A 10-round salt factor is used for hashing.
* **Fail-Safe Auth:** Login failures use generic messages to prevent email enumeration.
* **Access Control:** The system is prepared to scale permissions. New roles can be added to the schema and checked via middleware.
* **Token Standard:** Uses `ACCESS_TOKEN_SECRET` for signing, following standard JWT best practices.

## Tech Stack

* **Node.js:** Runtime environment.
* **Express.js:** Web framework.
* **MongoDB & Mongoose:** Data persistence and modeling.
* **JSON Web Token (JWT):** Secure transmission of claims.
* **Bcrypt:** Password hashing and salting.

## How to Run

1. **Install Dependencies:**

```bash
npm install express mongoose dotenv jsonwebtoken bcrypt
```

2. **Configure Environment:**
Create a `.env` file:

```env
DB_URL=mongodb+srv://user:pass@cluster.mongodb.net/dbname
ACCESS_TOKEN_SECRET=your_super_secret_key
PORT=3000
```

3. **Start the Server:**

```bash
node app.js
```

4. **Access the API:**

* `POST /auth/register` - Create a new account.
* `POST /auth/login` - Obtain a JWT token.
* `GET /auth/profile` - Access your data (requires Header `Authorization: <token>`).

## Learning Notes

* **Stateless Auth:** Demonstrates how to manage sessions without server-side cookies.
* **Middleware Pattern:** Showcases how to intercept requests for security checks before they reach the controller.
* **Data Sanitization:** Ensures sensitive data (like password hashes) is not leaked in the profile response.
