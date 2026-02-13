# Module 09 – Express.js API and Endpoint Fundamentals

## Description
This module introduces **backend web development with Express.js**, focusing on how to build and expose **API endpoints** and handle **HTTP requests and responses**.

The emphasis is on understanding the **request lifecycle**, endpoint creation, middleware execution, and proper handling of asynchronous operations. API calls are tested using tools such as **Insomnia** and **Postman**.

---

## Core Concepts Covered

### Express Application
- Creating and initializing an Express server
- Using `app` as the central application instance
- Listening for HTTP requests on a defined port

### API Calls and Endpoints
- Defining endpoints using:
  - `GET`
  - `POST`
  - `PUT`
  - `DELETE`
- Understanding endpoint responsibilities
- Handling request data via:
  - `req.params`
  - `req.query`
  - `req.body`
- Sending responses using `res.json()` and `res.send()`

### Request and Response Flow
- Understanding how `req` and `res` work internally
- Managing request lifecycle from client to server
- Structuring consistent API responses

### HTTP Status Codes
- Using appropriate status codes for:
  - Success responses (`200`, `201`)
  - Client errors (`400`, `404`)
  - Server errors (`500`)
- Returning meaningful responses for each scenario

---

## Middleware
- Concept and purpose of middleware
- Global middleware usage
- Route-level middleware
- Common use cases:
  - Validation
  - Logging
  - Request preprocessing

---

## Asynchronous Operations
- Handling async logic with:
  - `async / await`
  - Promises
- Error handling using `try / catch`
- Preventing server crashes caused by unhandled errors

---

## Additional Concepts
- Rendering responses when applicable
- Generating unique IDs for resources
- Using environment variables with `.env`
- Keeping sensitive configuration outside source code

---

## Tools Used
- Node.js
- Express.js
- Postman
- dotenv

---

## Learning Outcomes
- Ability to design and expose REST-style endpoints
- Clear understanding of API calls and data flow
- Confident use of middleware and async logic
- Experience testing endpoints using API clients
- Strong foundation for building scalable backend APIs

---

## Notes
This module represents the transition from **logic-focused CLI systems** to **real HTTP-based backend services**. All concepts introduced here serve as the foundation for building full REST APIs and integrating databases such as MongoDB.

---
